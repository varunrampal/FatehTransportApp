using Microsoft.EntityFrameworkCore.Migrations;

namespace FatehApp.API.Migrations
{
    public partial class AddedNameColumnInQuote : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Quotes",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Quotes");
        }
    }
}
