import { ColoredComponent } from '@/components/coloredComponent/ColoredComponent';
import { Header } from '@/components/allTipsComponent/tips1Refactored/Header';
import { FullNameAndComment } from '@/components/allTipsComponent/tips2Refactored/FullNameAndComment';
import { AgeCounterLocalized } from '@/components/allTipsComponent/tips2Refactored/AgeCounterLocalized';

export function SpeakerForm() {
    return (
        <div className="flex flex-col border-neutral-600 rounded bg-neutral-700 border w-96">
            <Header />
            <div className="p-6 flex flex-col gap-2">
                <FullNameAndComment />
                <AgeCounterLocalized>
                    <ColoredComponent />
                </AgeCounterLocalized>
                <ColoredComponent />
            </div>
        </div>
    );
}
