// components/redux/hook/hook.tsx
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// 自定義hook 這樣就可以在其他地方使用useAppDispatch和useAppSelector 同時使用前面的型別推論
// 可以確保我們使用useAppDispatch和useAppSelector的時候都只會使用到我們在store裡面定義的型別
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector