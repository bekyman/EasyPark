public class EasyParkDbContext : DbContext
{
    public DbSet<User> Users => Set<User>();
    public DbSet<Vehicle> Vehicles => Set<Vehicle>();
    public DbSet<ParkingFacility> ParkingFacilities => Set<ParkingFacility>();
    public DbSet<ParkingArea> ParkingAreas => Set<ParkingArea>();
    public DbSet<ParkingSpace> ParkingSpaces => Set<ParkingSpace>();
    public DbSet<Reservation> Reservations => Set<Reservation>();
    public DbSet<Payment> Payments => Set<Payment>();
}