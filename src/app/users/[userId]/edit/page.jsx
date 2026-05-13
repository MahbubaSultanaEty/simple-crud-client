import { getUserById } from "@/app/lib/data";
import { Button, Card, Input, Label, Modal, TextField } from "@heroui/react";
import React from "react";

const EditUSerPage = async ({ params }) => {
  const { userId } = await params;
  const user = await getUserById(userId);
  console.log("editing user", user);
  return (
   
          <div className="m-8 max-w-[100px]">
               <Card >
              <h2>Editing User: {user.name}</h2>
        <form action={``} className="flex flex-col gap-4">
          <TextField className="w-full" name="name" type="text" defaultValue={user?.name}>
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
          </TextField>
          <TextField className="w-full" name="email" type="email" defaultValue={user.email}>
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
          </TextField>
          <TextField className="w-full" name="role" type="text" defaultValue={user?.phone || user?.role}>
            <Label>Role</Label>
            <Input placeholder="Enter your role" />
          </TextField>

          <div className="flex  gap-4">
            <Button slot="close" variant="secondary">
              Cancel
            </Button>
            <Button type="submit" slot="close">
              Update User
            </Button>
          </div>
        </form>
      </Card>
          </div>

  );
};

export default EditUSerPage;
