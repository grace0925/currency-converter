import React, { Component } from 'react'
import {MdSwapVert} from 'react-icons/md'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Flag from 'react-flagkit'

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    }
}))