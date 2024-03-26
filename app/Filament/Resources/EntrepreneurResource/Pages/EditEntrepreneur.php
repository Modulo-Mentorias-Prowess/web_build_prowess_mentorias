<?php

namespace App\Filament\Resources\EntrepreneurResource\Pages;

use App\Filament\Resources\EntrepreneurResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditEntrepreneur extends EditRecord
{
    protected static string $resource = EntrepreneurResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
