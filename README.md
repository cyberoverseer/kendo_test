1. Creating Dotnet Web API
    dotnet new webapi -o Name -n Name

    Where "-o" is where it will output and  "-n" is the name of the project.

2. Running .Net Core
    dotnet run 

3. Changing Environment
    If Git Bash:
        export ASPNETCORE_ENVIRONMENT = Development

    If Powershell:
        $env:ASPNETCORE_ENVIRONMENT = "Development"

4. The .csproj file is where you install nuget packages. After installing run:
    dotnet restore

5. Creating Models.
    -Add a new folder named "Models" on the root of the folder.
    -Add a a file ExampleModel.cs on the Models folder.

6. Creating Data Context
    -Add a new folder named "Data".
    -Add a File named DataConext.cs. 

    e.g

    using Microsoft.EntityFrameworkCore;
    using Example.Models;

        public class DataConext: DbContext
        {
            public DataContext(DbContextoptions<DataContext> options) : base(options) {}

            public DbSet<value>  Values { get; set; }
        }    

    - At the startup.cs add:
        If using SQLITE:
        services.AddDbContext<DataContext>(x => x.UseSqlite(Configuration.GetConnectionString("Sqlite"))); 

        If using MSSQL:
        services.AddDbContext<ApplicationDbContext>(x => x.UseSqlServer(Configuration.GetConnectionString("MSSQL")));

        If using POSTGRESQL:
        services.AddDbContext<ApplicationDbContext>(x => x.UseNpgsql(Configuration.GetConnectionString("Postgresql")));

        If using MySQL:
        services.AddDbContext<ApplicationDbContext>(x => x.UseMySql(Configuration.GetConnectionString("MySQL")));

7. Add Connection String
    At the appsettings.json add:

        "ConnectionStrings" : {
            "Sqlite" : "Data Source=Example.db",
            "MSSQL" : "Server=(local)\\SQLEXPRESS;Database=example_db;Trusted_Connection=True;MultipleActiveResultSets=true",
            "MySQL" : "server=127.0.0.1;uid=root;pwd=12345;database=example_db",
            "Postgresql" : "Server=localhost;Port=5432;Database=example_db;User Id=myUsername;Password=myPassword;"
        }

8. Installing Entity Framework Tools:
    If using .Net 2.0 CLI add this to .csproj file:

        <DotNetCliToolReference Include ="Microsoft.EntityFrameworkCore.Tools.Dotnet" Version="X.XX" /> 

    then RUN to install:
        dotnet restore    

    If using .Net 2.1 CLI there is no need to install this as it is already been part of the whole aspnetcore package.

    To verify the installation RUN:
        dotnet ef
     
9. Add a Migration File:
    RUN:
        dotnet ef migrations add NameOfTheMigrationFile

    Then it will create a folder on the root of the project named "Migrations" 

10. Create The Database Using Entity Framework Migration:
    RUN:
        dotnet ef database update

    On the console it should say after a successful migration:
        Applying migration '1234_MigrationFile'.
        Done.

11. Retrieving Data from Datbase Code Snippets:

    using Example.Data;
    ...
    ..

    private readonly DataContext _context;

    public ValuesController(DataContext context)
    {
        _context = context;
    }

    //Get All Values
    [HttpGet]
    public IActionResult GetValues()
    {
        var values = _context.Values.ToList();

        return Ok(values);
    }

    //Get Specific Value
    [HttpGet("{id}")]
    public IActionResult GetValue(int id)
    {
        var value = _context.Values.FirstOrDefault(x => x.Id == id);

        return Ok(value);
    }

    ...

12. Making Code Asynchronous code snippets

    public async Task<IActionResult> GetValues()
    {
        var values = await _context.Values.ToListAsync();

        return Ok(values);
    }

    public async Task<IActionResult> GetValue(int id)
    {
        var value = await _context.Values.FirstOrDefaultAsync(x => x.Id == id);

        return Ok(value);
    }

