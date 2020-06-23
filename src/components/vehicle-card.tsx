import React, { FC } from 'react';
import { Card, RemoveButton, RemoveIcon, Image, Title } from './vehicle-card.styled';

interface VehicleCardProps {
    /**
     * Vehicle year to display
     */
    year: number;

    /**
     * Vehicle make name to display
     */
    make: string; 

    /**
     * Vehicle model name to display
     */
    model: string;

    /**
     * Vehicle image URL to display
     */
    imageUrl: string;

    /**
     * Close event handler
     */
    close: () => void;
}

const VehicleCard: FC<VehicleCardProps> = (props: VehicleCardProps) => (
<Card>
    <RemoveButton onClick={() => props.close()}>Remove <RemoveIcon /></RemoveButton>
    <Image src={props.imageUrl} alt=""></Image>
    <Title>{props.year} {props.make} <strong>{props.model}</strong></Title>
</Card>
);

export default VehicleCard;