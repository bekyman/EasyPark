namespace EasyPark.Domain.Entities;

public class ParkingFacility
{
    public Guid Id { get; set; }

    public Guid ProviderId { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public string Address { get; set; } = string.Empty;

    public decimal Latitude { get; set; }

    public decimal Longitude { get; set; }

    public string PhoneNumber { get; set; } = string.Empty;

    public User Provider { get; set; } = null!;

    public ICollection<ParkingArea> ParkingAreas { get; set; } =
        new List<ParkingArea>();
}