import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import { Container, FormControl, OutlinedInput, InputLabel, Divider, Box, Stack, Button, Typography, Avatar, Link, Input } from '@mui/material'
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import ClearIcon from '@mui/icons-material/Clear';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Form from 'react-bootstrap/Form'
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';

const style = {
    width: 430,
    backgroundColor: '#fff',
    position: 'absolute',
    zIndex: 999,
};


const Comment = (props) => {
    const [open, setOpen] = useState(false);
    // reply
    const [reply, setreply] = useState(false);

    const { setcomment } = props
    return (
        <div>

            <Box m={3} sx={style}>

                <Stack direction='row' p={1} sx={{ justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#D5E0E9' }} >
                    <Box>

                        <ArrowDropDownSharpIcon onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open} />
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                            Comment
                        </Typography>
                    </Box>
                    <Box>
                        <span onClick={() => { setcomment(false); }}>X</span>
                    </Box>

                </Stack>
                <Box sx={{ backgroundColor: '#DEDEDE' }}>
                    {
                        < Collapse in={open}>
                            <div id="example-collapse-text">
                                <Stack p={1} direction='row' sx={{ alignItems: 'start' }}>
                                    <TextareaAutosize
                                        aria-label="minimum height"
                                        minRows={3}
                                        // placeholder="Comments"
                                        p={3}
                                        style={{ width: '500px', borderRadius: '4px' }}
                                    />
                                </Stack>
                                <Stack direction='row' p={1} gap={4} sx={{ justifyContent: 'center' }}>
                                    <Button variant="outlined" size="small">Submit</Button>

                                </Stack>
                            </div>
                        </Collapse>
                    }

                </Box>
                <Box height="200px" sx={{ overflow: 'scroll' }}>
                    <Stack direction='row' p={2} gap={3} sx={{ alignItems: 'center' }}>
                        <Box>
                            <Avatar src="./img/2.png" />

                        </Box>
                        <Box>
                            <Typography>
                                This commnet ghsijoens  hbjid2 3jwnd
                            </Typography>
                            <Typography variant='body2'>
                                John S Smith 3 Year
                            </Typography>
                            <Typography variant='body'>
                                <Link onClick={() => setreply(!reply)}
                                    aria-controls="exampleee-collapse-textes"
                                    aria-expanded={reply} >Reply</Link>
                                {
                                    < Collapse in={reply}>
                                        <div id="exampleee-collapse-textes">
                                            <Stack p={1} direction='row' gap={2} sx={{ alignItems: 'start' }}>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="comments"
                                                    
                                                    size="small"
                                                />
                                                <Button variant="outlined" size="small">Save</Button>
                                                <Button variant="outlined" size="small"  onClick={() => setreply(!reply)}>Cancel</Button>
                                            </Stack>

                                        </div>
                                    </Collapse>
                                }
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack direction='row' p={2} gap={3} sx={{ alignItems: 'center' }}>
                        <Box>
                            <Avatar src="./img/2.png" />

                        </Box>
                        <Box>
                            <Typography>
                                This commnet ghsijoens  hbjid2 3jwnd
                            </Typography>
                            <Typography variant='body2'>
                                John S Smith 3 Year
                            </Typography>
                            <Typography variant='body'>
                                <Link onClick={() => setreply(!reply)}
                                    aria-controls="exampleee-collapse-textes"
                                    aria-expanded={reply} >Reply</Link>
                                {
                                    < Collapse in={reply}>
                                        <div id="exampleee-collapse-textes">
                                            <Stack p={1} direction='row' gap={2} sx={{ alignItems: 'start' }}>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="comments"
                                                    
                                                    size="small"
                                                />
                                                <Button variant="outlined" size="small">Save</Button>
                                                <Button variant="outlined" size="small"  onClick={() => setreply(!reply)}>Cancel</Button>
                                            </Stack>

                                        </div>
                                    </Collapse>
                                }
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack direction='row' p={2} gap={3} sx={{ alignItems: 'center' }}>
                        <Box>
                            <Avatar src="./img/2.png" />

                        </Box>
                        <Box>
                            <Typography>
                                This commnet ghsijoens  hbjid2 3jwnd
                            </Typography>
                            <Typography variant='body2'>
                                John S Smith 3 Year
                            </Typography>
                            <Typography variant='body'>
                                <Link onClick={() => setreply(!reply)}
                                    aria-controls="exampleee-collapse-textes"
                                    aria-expanded={reply} >Reply</Link>
                                {
                                    < Collapse in={reply}>
                                        <div id="exampleee-collapse-textes">
                                            <Stack p={1} direction='row' gap={2} sx={{ alignItems: 'start' }}>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="comments"
                                                    
                                                    size="small"
                                                />
                                                <Button variant="outlined" size="small">Save</Button>
                                                <Button variant="outlined" size="small"  onClick={() => setreply(!reply)}>Cancel</Button>
                                            </Stack>

                                        </div>
                                    </Collapse>
                                }
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack direction='row' p={2} gap={3} sx={{ alignItems: 'center' }}>
                        <Box>
                            <Avatar src="./img/2.png" />

                        </Box>
                        <Box>
                            <Typography>
                                This commnet ghsijoens  hbjid2 3jwnd
                            </Typography>
                            <Typography variant='body2'>
                                John S Smith 3 Year
                            </Typography>
                            <Typography variant='body'>
                                <Link onClick={() => setreply(!reply)}
                                    aria-controls="exampleee-collapse-textes"
                                    aria-expanded={reply} >Reply</Link>
                                {
                                    < Collapse in={reply}>
                                        <div id="exampleee-collapse-textes">
                                            <Stack p={1} direction='row' gap={2} sx={{ alignItems: 'start' }}>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="comments"
                                                    
                                                    size="small"
                                                />
                                                <Button variant="outlined" size="small">Save</Button>
                                                <Button variant="outlined" size="small" onClick={() => setreply(!reply)}>Cancel</Button>
                                            </Stack>

                                        </div>
                                    </Collapse>
                                }
                            </Typography>
                        </Box>
                    </Stack>
                    

                </Box>
            </Box>
        </div >
    )
}

export default Comment




