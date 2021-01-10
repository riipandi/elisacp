package controllers

import (
	"fmt"
	"github.com/gofiber/fiber/v2"
	"github.com/riipandi/lisacp/cmd/app/utils"
)

func UploadSingleFile(c *fiber.Ctx) error {
	// Get first file from form field "document":
	file, err := c.FormFile("document")
	if err != nil {
		return c.Status(500).JSON(err)
	}

	targetPath := fmt.Sprintf(utils.SetUploadDirectory() + "/%s", file.Filename)
	if err := c.SaveFile(file, targetPath); err != nil {
		return c.Status(500).JSON(err)
	}

	return c.Status(200).JSON(fiber.Map{
		"message": "File uploaded to " + targetPath,
		"status": "success",
	})
}

func UploadMultiFile(c *fiber.Ctx) error {
	// Parse the multipart form:
	form, err := c.MultipartForm()
	if err != nil {
		return err
	}

	// Get all files from "documents" key:
	files := form.File["documents"]

	// Loop through files:
	for _, file := range files {
		fmt.Println(file.Filename, file.Size, file.Header["Content-Type"][0])

		// Save the files to disk:
		targetPath := fmt.Sprintf(utils.SetUploadDirectory() + "/%s", file.Filename)
		err := c.SaveFile(file, targetPath)

		// Check for errors
		if err != nil {
			return c.Status(500).JSON(fiber.Map{
				"message": "Failed to upload files",
				"status": "error",
			})
		}
	}

	return c.Status(200).JSON(fiber.Map{
		"message": "Files has been uploaded",
		"status": "success",
	})
}
