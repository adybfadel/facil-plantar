import React from 'react';
import { injectIntl } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';

import { 
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from '@material-ui/core';

import { 
  ChevronDown,
  Cart,
  Camera,
} from 'mdi-material-ui';

import styles from './TasksPanel.css';
import ImageSliderContainer from '../image-slider/ImageSliderContainer';

const useStyles = makeStyles(styles);

const TasksPanel = ({ 
  
  intl,
  tasks,

}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(null);
  const [imageSlider, setImageSlider] = React.useState({ open: false, images: [] });

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleOpenImageSlider = task => {
    setImageSlider({
      title: intl.formatMessage({id:`Task.${task.name}`}),
      images: task.images,
      open: true,
    });
  }

  const handleCloseImageSlider = () => {
    setImageSlider({ open: false });
  }
  
  return (    
    <div className={classes.root}>
      {
        tasks.map(task => {
          return (
            <ExpansionPanel key={task.id} className={classes.infoPanel} expanded={expanded === task.name} onChange={handleChange(task.name)}>
              <ExpansionPanelSummary expandIcon={<ChevronDown />} className={classes.taksSummary}>
                <Typography>{intl.formatMessage({id:`Task.${task.name}`})}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.infoDetails}>
                {
                  task.materials && (
                    <List dense>
                      <ListSubheader className={classes.listSubHeader}>
                        {intl.formatMessage({id:'Receipt.material'})}
                      </ListSubheader>
                      {
                        task.materials.map(material => {
                          return (
                            <ListItem key={material.id} className={classes.listItem}>
                              <ListItemText className={classes.itemText} primary={material.quant} />
                              <ListItemText className={classes.itemText} primary={intl.formatMessage({id:`Product.unit.${material.product.unit}`})} />
                              <ListItemText className={classes.itemText} primary={material.product.name} />
                              {material.product.link && (
                                <a target="_blank" rel="noopener noreferrer" href={material.product.link}>
                                  <Cart className={classes.listIcon} />
                                </a>
                              )}
                            </ListItem>
                          );
                        })
                      }
                    </List> 
                  )
                }
                {
                  task.instructions && (
                    <List dense>
                      <ListSubheader className={classes.listSubHeader}>
                        {intl.formatMessage({id:'Receipt.instructions'})}
                        {task.images[0] && (<Camera className={classes.listIcon} onClick={() => handleOpenImageSlider(task)} />)}
                      </ListSubheader>
                      {
                        task.instructions.map(instruction => {
                          return (
                            <ListItem key={instruction.id} className={classes.listItem}>
                              <ListItemText primary={`- ${instruction.step.text}`} />
                            </ListItem>
                          );
                        })
                      }
                    </List> 
                  )
                }
                {
                  task.period && (
                    <List dense>
                      <ListSubheader className={classes.listSubHeader}>
                      {intl.formatMessage({id:'Receipt.period'})}
                      </ListSubheader>
                        <ListItem className={classes.listItem}>
                          { task.period.map((p,i) => {
                            const sep = i < task.period.length - 1 ? ',' : '';
                            return (<ListItemText key={i} className={classes.itemText} primary={intl.formatMessage({id:`Receipt.period.${p}`}) + sep} />)
                          })}
                        </ListItem>
                    </List> 
                  )
                }
                {
                  task.note && (
                    <List dense>
                      <ListSubheader className={classes.listSubHeader}>
                      {intl.formatMessage({id:'Receipt.note'})}
                      </ListSubheader>
                        <ListItem className={classes.listItem}>
                          <ListItemText primary={task.note} />
                        </ListItem>
                    </List> 
                  )
                }
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )
        })
      }
      <ImageSliderContainer
        open={imageSlider.open}
        title={imageSlider.title}
        images={imageSlider.images}
        onClose={handleCloseImageSlider}
      />
    </div>
  );
};

export default injectIntl(TasksPanel);