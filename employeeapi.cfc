<cfheader name="Access-Control-Allow-Origin" value="*" />
<cfheader name="Access-Control-Allow-Methods" value="GET" />
<cfheader name="Access-Control-Allow-Headers" value="Content-Type" />
<cfcomponent output="false" rest="true">
    <cffunction name="getEmployees" access="remote" returntype="any" returnformat="json">
        <!--- CORS headers for React --->
        <cfheader name="Access-Control-Allow-Origin" value="*" />
        <cfheader name="Access-Control-Allow-Methods" value="GET" />
        <cfheader name="Access-Control-Allow-Headers" value="Content-Type" />

        <!--- Query database --->
        <cfquery name="qEmployees" datasource="teambase">
            SELECT ID, FirstName, LastName, Role
            FROM Employees
        </cfquery>

        <!--- Return as JSON --->
        <cfreturn qEmployees>
    </cffunction>
</cfcomponent>