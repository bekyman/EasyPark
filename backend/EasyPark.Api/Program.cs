var builder = WebApplication.CreateBuilder(args);

// OpenAPI
builder.Services.AddOpenApi();

// Allow requests from the React frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("FrontendPolicy", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// OpenAPI is available in Development
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// Enable CORS before mapping endpoints
app.UseCors("FrontendPolicy");

// Temporary HTTP development setup.
// We will configure HTTPS properly later.
 
// EasyPark API health check
app.MapGet("/api/health", () =>
{
    return Results.Ok(new
    {
        status = "OK",
        message = "EasyPark API is running"
    });
});

app.Run();