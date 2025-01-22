import React,{useState} from 'react';
import Buttons from '../../component/Buttons/Buttons';
import { Card } from "primereact/card";
import { TabView, TabPanel } from 'primereact/tabview';
import { useForm } from 'react-hook-form';
import InputField from "../../component/Input/Input";
import Field from "../../component/Field";
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from "primereact/inputtextarea";
import './admission.css';
import "../../component/Checkbox/Checkbox.css"

const AdmissionMasterForm = () => {
    const [value, setValues] = useState<any|null>('');
    const admissionSlot:any=[
        { name: 'PlayGroup', key: 'A' },
        { name: 'Nursury', key: 'M' },
        { name: 'EuroJunior', key: 'P' },
        { name: 'EuroSenior', key: 'R' }
      ]
    
      const mariatalStatus=[
        { name: 'Married', key: 'M' },
        { name: 'Single', key: 'S' },
        { name: 'Other', key: 'O' },
      ]
    
      const educationCheck=[
        { name: 'Undergraduate', key: 'U' },
        { name: 'Graduate', key: 'G' },
        { name: 'Postgraduate', key: 'P' },
      ]

      const occupationCheck:any=[
        { name: 'Service', key: 'S' },
        { name: 'Business', key: 'B' },
        { name: 'Other', key: 'O' },
      ]
    const {
        register,
        handleSubmit,
        control,
        setValue,
        reset,
        
    
        formState: { errors, isSubmitting },
      } = useForm({
        defaultValues: {
            firstName:"",
            surName:"",
            nameUsedAtHome:"",
            gender:"",
            nationality:"",
            dob:"",
            residentialAddress:"",
            Landmark:"",
            city:"",
            state:'',
            pincode:'',
            fatherName:"",
            education:"",
            occupation:"",
            nameOfOrganization:'',
            telephone:"",
            officePhone:"",
            mobileNo:"",
            emailId:""
        },
    })
 return (
  
    <section className="w-full ml-4 mr-4 md:ml-8 md:mr-8 lg:ml-20 lg:mr-20">
  <form >
    <Card className="shadow-md mt-4 border-2 border-indigo-600 mt-2">
    <div className="grid grid-cols-2 gap-4">
      <div className="flex justify-center mt-1">
        <h6 className="Text_Primary">Admission Form</h6>
      </div>

      {/* Button Section - Proper Right Alignment */}
      <div className="flex mt-4">
        <Buttons type="submit" className="Primary_Button" label="Save" />
        <Buttons className="Secondary_Button w-20" label="List" />
      </div>
      </div>
    </Card>

    <Card>
    <div className="grid grid-cols-2 gap-4">

  <div className="p-4">
    <label>Date of Admission</label>
        <InputText
          value={""}
          onChange={(e) => setValues(e.target.value)}
          className="border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 mb-4"
        />
    <label> Admission sought in:</label> 
    {admissionSlot.map((category:any) => {
    return (
       <>
            <Checkbox inputId={category.key} name="category" value={category.name}
            style={{ marginLeft: '10px' }} checked={true}
            />
            <label htmlFor={category.key} className="ml-2">{category.name}</label>
        </>
    );
})}
        </div>
       
  <div className="col-span-1 p-4"> <img src="" alt="" width="100" height="100" /></div>
 
</div>
</Card>


    <Card className="shadow-md mt-4 border-2 border-indigo-600 mt-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <TabView>
            <TabPanel header="Particular of the Child">
              <Card className="p-6 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Field
                    controller={{
                      name: "firstName",
                      control: control,
                      render: ({ field }: any) => (
                        <InputField
                          {...register("firstName", {
                            required: "Please fill the required fields.",
                          })}
                          label={"First Name"}
                          require={true}
                          setValue={setValue}
                          invalid={errors.firstName}
                          {...field}
                        />
                      ),
                    }}
                    error={errors?.firstName?.message}
                  />

                  <Field
                    controller={{
                      name: "surName",
                      control: control,
                      render: ({ field }: any) => (
                        <InputField
                          {...register("surName", {
                            required: "Please fill the required fields.",
                          })}
                          label={"Surname"}
                          require={true}
                          setValue={setValue}
                          invalid={errors.surName}
                          {...field}
                        />
                      ),
                    }}
                    error={errors?.surName?.message}
                  />

                  <Field
                    controller={{
                      name: "nameUsedAtHome",
                      control: control,
                      render: ({ field }: any) => (
                        <InputField
                          {...register("nameUsedAtHome", {
                            required: "Please fill the required fields.",
                          })}
                          label={"Name Used At Home"}
                          require={true}
                          setValue={setValue}
                          invalid={errors.nameUsedAtHome}
                          {...field}
                        />
                      ),
                    }}
                    error={errors?.nameUsedAtHome?.message}
                  />

                  {/* Gender Section */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Gender</label>
                    <div className="flex items-center gap-4 mt-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          {...register("gender", { required: "Please select your sex." })}
                          value="Male"
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">Male</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          {...register("gender", { required: "Please select your sex." })}
                          value="Female"
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">Female</span>
                      </label>
                    </div>
                    {errors.gender && <span className="text-red-500 text-xs">{errors.gender.message}</span>}
                  </div>

                  <Field
                    controller={{
                      name: "dob",
                      control: control,
                      render: ({ field }: any) => (
                        <InputField
                          {...register("dob", {
                            required: "Please fill the required fields.",
                          })}
                          label={"Date of Birth"}
                          require={true}
                          setValue={setValue}
                          invalid={errors.dob}
                          {...field}
                        />
                      ),
                    }}
                    error={errors?.dob?.message}
                  />

                  {/* Age Calculation Section */}
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <InputField label="Years" type="number" />
                    </div>
                    <div>
                      <InputField label="Months" type="number" />
                    </div>
                    <div>
                      <InputField label="Days" type="number" />
                    </div>
                  </div>

                  <div className="col-span-3">
                    <label className="Text_Secondary Input_Label">Residential Address</label>
                    <Field
                      controller={{
                        name: "residentialAddress",
                        control: control,
                        render: ({ field }: any) => (
                          <InputTextarea
                            {...register("residentialAddress")}
                            rows={1}
                            maxLength={400}
                            className="w-full border border-gray-300 rounded-lg p-2"
                            {...field}
                          />
                        ),
                      }}
                    />
                  </div>
                  <div className="col-span-3">
                    <label className="Text_Secondary Input_Label">Landmark</label>
                    <Field
                      controller={{
                        name: "Landmark",
                        control: control,
                        render: ({ field }: any) => (
                          <InputTextarea
                            {...register("Landmark")}
                            rows={1}
                            maxLength={400}
                            className="w-full border border-gray-300 rounded-lg p-2"
                            {...field}
                          />
                        ),
                      }}
                    />
                  </div>
                  <div>
                    <Field
                    controller={{
                        name: "city",
                        control: control,
                        render: ({ field }:any) => {
                        return (
                            <InputField
                            {...register("city", {
                                required:"Please Enter the State"
                            })}
                            label="City"
                            require={true}
                            placeholder="Please Enter"
                            {...field}
                            />
                        );
                        },
                    }}
                    />
                </div>
                  <div>
                    <Field
                    controller={{
                        name: "state",
                        control: control,
                        render: ({ field }:any) => {
                        return (
                            <InputField
                            {...register("state", {
                                required:"Please Enter the State"
                            })}
                            label="State"
                            require={true}
                            placeholder="Please Enter"
                            {...field}
                            />
                        );
                        },
                    }}
                    />
      </div>

      <div>
        <Field
          controller={{
            name: "pincode",
            control: control,
            render: ({ field }:any) => {
              return (
                <InputField
                  {...register("pincode", {
                    required:"Please Enter the Pincode"
                  })}
                  label="Pincode"
                  require={true}
                  placeholder="Please Enter"
                  {...field}
                />
              );
            },
          }}
        />
      </div>
                </div>
              </Card>
            </TabPanel>

            <TabPanel header="Particular of Parents/Guardians">
              <Card className="p-6 shadow-md">
              <div className="headingConainer">
            <p>{("Father Details")}</p>
          </div>
            <div className="mt-3 grid grid-cols-3 gap-6 md:grid-cols-3 lg:grid-cols-3">
                  <Card className="col-span-3">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3">
                        <label className="Text_Secondary Input_Label">Father Name</label>
                        <Field
                          controller={{
                            name: "fatherName",
                            control: control,
                            render: ({ field }:any) => {
                              return (
                                <InputTextarea
                                  {...register("fatherName", {})}
                                  rows={1}
                                  maxLength={400}
                                  className="w-full border border-gray-300 rounded-lg p-2"
                                  {...field}
                                />
                              );
                            },
                          }}
                        />
                      </div>
                      <div>
                        <label className="Text_Secondary Input_Label">Educational Qualification</label>
                       <div>
                        {educationCheck.map((category:any) => {
                        return (
                         <>
                            <Checkbox inputId={category.key} name="category" value={category.name}
                            style={{ marginLeft: '10px' }} checked={true}
                            />
                            <label htmlFor={category.key} className="ml-2">{category.name}</label>
                        </>
                        );
                        })}</div>
                     
                      </div>
                      <div>
                        <label className="Text_Secondary Input_Label">Occupation optional</label>
                        <div>
                        {occupationCheck.map((category:any) => {
                        return (
                         <>
                            <Checkbox inputId={category.key} name="category" value={category.name}
                            style={{ marginLeft: '10px' }} checked={true}
                            />
                            <label htmlFor={category.key} className="ml-2">{category.name}</label>
                        </>
                        );
                        })}</div>
                        
                       
                      </div>
                      <div><div/>
                      </div>
                      <Field
                          controller={{
                            name: "telephone",
                            control: control,
                            render: ({ field }:any) => {
                              return (
                                <InputField
                                  {...register("telephone", {
                                    required:"Please Enter details"
                                  })}
                                  label="telephone"
                                  require={true}
                                  placeholder="Please Enter"
                                  {...field}
                                />
                              );
                            },
                          }}
                        />
                         <Field
                          controller={{
                            name: "office",
                            control: control,
                            render: ({ field }:any) => {
                              return (
                                <InputField
                                  {...register("officePhone", {
                                    required:"Please Enter details"
                                  })}
                                  label="Office Phone"
                                  require={true}
                                  placeholder="Please Enter"
                                  {...field}
                                />
                              );
                            },
                          }}
                        />
                         <Field
                          controller={{
                            name: "mobileNo",
                            control: control,
                            render: ({ field }:any) => {
                              return (
                                <InputField
                                  {...register("mobileNo", {
                                    required:"Please Enter details"
                                  })}
                                  label="Mobile No"
                                  require={true}
                                  placeholder="Please Enter"
                                  {...field}
                                />
                              );
                            },
                          }}
                        />
                         <Field
                          controller={{
                            name: "nameOfOrganization",
                            control: control,
                            render: ({ field }:any) => {
                              return (
                                <InputField
                                  {...register("nameOfOrganization", {
                                    required:"Please Enter details"
                                  })}
                                  label="Name of Organization"
                                  require={true}
                                  placeholder="Please Enter"
                                  {...field}
                                />
                              );
                            },
                          }}
                        />
                       <Field
                          controller={{
                            name: "emailId",
                            control: control,
                            render: ({ field }:any) => {
                              return (
                                <InputField
                                  {...register("emailId", {
                                    required:"Please Enter details"
                                  })}
                                  label="Email Id"
                                  require={true}
                                  placeholder="Please Enter"
                                  {...field}
                                />
                              );
                            },
                          }}
                        />

                     </div>
                      </Card>
            </div>
            <div className="headingConainer">
            <p>{("Mother Details")}</p>
          </div>
            <div className="mt-3 grid grid-cols-3 gap-6 md:grid-cols-3 lg:grid-cols-3">
                  <Card className="col-span-3">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3">
                        <label className="Text_Secondary Input_Label">Father Name</label>
                        <Field
                          controller={{
                            name: "fatherName",
                            control: control,
                            render: ({ field }:any) => {
                              return (
                                <InputTextarea
                                  {...register("fatherName", {})}
                                  rows={1}
                                  maxLength={400}
                                  className="w-full border border-gray-300 rounded-lg p-2"
                                  {...field}
                                />
                              );
                            },
                          }}
                        />
                      </div>
                      <div>
                        <label className="Text_Secondary Input_Label">Educational Qualification</label>
                       <div>
                        {educationCheck.map((category:any) => {
                        return (
                         <>
                            <Checkbox inputId={category.key} name="category" value={category.name}
                            style={{ marginLeft: '10px' }} checked={true}
                            />
                            <label htmlFor={category.key} className="ml-2">{category.name}</label>
                        </>
                        );
                        })}</div>
                     
                      </div>
                      <div>
                        <label className="Text_Secondary Input_Label">Occupation optional</label>
                        <div>
                        {occupationCheck.map((category:any) => {
                        return (
                         <>
                            <Checkbox inputId={category.key} name="category" value={category.name}
                            style={{ marginLeft: '10px' }} checked={true}
                            />
                            <label htmlFor={category.key} className="ml-2">{category.name}</label>
                        </>
                        );
                        })}</div>
                        
                       
                      </div>
                      <div><div/>
                      </div>
                      <Field
                          controller={{
                            name: "telephone",
                            control: control,
                            render: ({ field }:any) => {
                              return (
                                <InputField
                                  {...register("telephone", {
                                    required:"Please Enter details"
                                  })}
                                  label="telephone"
                                  require={true}
                                  placeholder="Please Enter"
                                  {...field}
                                />
                              );
                            },
                          }}
                        />
                         <Field
                          controller={{
                            name: "office",
                            control: control,
                            render: ({ field }:any) => {
                              return (
                                <InputField
                                  {...register("officePhone", {
                                    required:"Please Enter details"
                                  })}
                                  label="Office Phone"
                                  require={true}
                                  placeholder="Please Enter"
                                  {...field}
                                />
                              );
                            },
                          }}
                        />
                         <Field
                          controller={{
                            name: "mobileNo",
                            control: control,
                            render: ({ field }:any) => {
                              return (
                                <InputField
                                  {...register("mobileNo", {
                                    required:"Please Enter details"
                                  })}
                                  label="Mobile No"
                                  require={true}
                                  placeholder="Please Enter"
                                  {...field}
                                />
                              );
                            },
                          }}
                        />
                         <Field
                          controller={{
                            name: "nameOfOrganization",
                            control: control,
                            render: ({ field }:any) => {
                              return (
                                <InputField
                                  {...register("nameOfOrganization", {
                                    required:"Please Enter details"
                                  })}
                                  label="Name of Organization"
                                  require={true}
                                  placeholder="Please Enter"
                                  {...field}
                                />
                              );
                            },
                          }}
                        />
                       <Field
                          controller={{
                            name: "emailId",
                            control: control,
                            render: ({ field }:any) => {
                              return (
                                <InputField
                                  {...register("emailId", {
                                    required:"Please Enter details"
                                  })}
                                  label="Email Id"
                                  require={true}
                                  placeholder="Please Enter"
                                  {...field}
                                />
                              );
                            },
                          }}
                        />

                     </div>
                      </Card>
            </div>
            <div className="headingConainer">
            <p>{("Other Details")}</p>
            </div>
            <div>
                        <label className="Text_Secondary Input_Label">Martial Status of the Parents</label>
                        <div>
                        {mariatalStatus.map((category:any) => {
                        return (
                         <>
                            <Checkbox inputId={category.key} name="category" value={category.name}
                            style={{ marginLeft: '10px' }} checked={true}
                            />
                            <label htmlFor={category.key} className="ml-2">{category.name}</label>
                        </>
                        );
                        })}</div>
                        
                       
                      </div>
                     <div>
                     <label className="Text_Secondary Input_Label">Contact Person</label>
                     </div>
                     <div className="col-span-3">
                    <label className="Text_Secondary Input_Label">Any other information that the parent or gaurdian wishes to provide</label>
                    <Field
                      controller={{
                        name: "residentialAddress",
                        control: control,
                        render: ({ field }: any) => (
                          <InputTextarea
                            {...register("residentialAddress")}
                            rows={1}
                            maxLength={400}
                            className="w-full border border-gray-300 rounded-lg p-2"
                            {...field}
                          />
                        ),
                      }}
                    />
                  </div>
                     
          
              </Card>
            </TabPanel>

            <TabPanel header="More About Your Child">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label>Previous Schooling </label></div>
                <div><label>Previous Schooling </label></div>
                </div>
            </TabPanel>

            <TabPanel header="Medical Record">
              <p>Provide any medical history or special needs for your child.</p>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </Card>
  </form>
</section>


 )
}

export default AdmissionMasterForm