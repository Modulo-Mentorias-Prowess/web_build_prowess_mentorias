<?php

namespace App\Filament\Resources\EntrepreneurResource\Pages;

use App\Filament\Resources\EntrepreneurResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListEntrepreneurs extends ListRecords
{
    protected static string $resource = EntrepreneurResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
