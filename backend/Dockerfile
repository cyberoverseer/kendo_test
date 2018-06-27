FROM microsoft/aspnetcore-build:2.0 AS build-env

ENV APP /usr/src/app
RUN mkdir $APP
WORKDIR $APP

COPY *.csproj ./
RUN dotnet restore

COPY . ./
RUN dotnet publish -c Release -o out

ENTRYPOINT ["dotnet", "out/backend.dll"]

#COPY . $APP

#ENV ASPNETCORE_ENVIRONMENT Development

#RUN dotnet restore

#ENTRYPOINT dotnet restore && dotnet watch run --configuration Debug

#RUN dotnet publish -c Release -o out

#FROM microsoft/aspnetcore-build:2.0
#ENV APP /usr/src/app
#RUN mkdir $APP
#WORKDIR $APP

#COPY --from=build-env /$APP/out .
#ENTRYPOINT ["dotnet", "Backend.dll"]

#EXPOSE 5000