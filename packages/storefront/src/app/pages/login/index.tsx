import { PropsWithChildren } from 'react';

import { QHeading, QGrid, QRow, QColumn } from '@quirkles/component-library';

import { useAppDispatch, useAppSelector } from '../../store';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginProps {}

export function Login(logingProps: PropsWithChildren<LoginProps>) {
  const { password, username } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  return (
    <div>
      <QGrid>
        <QRow>
          <QColumn offsetMd={2} widthMd={8} offsetXl={3} widthXl={6}>
            <QHeading headingText="Sign in to the admin page"></QHeading>
            <form>
              <div>
                Email: <input type="text" />
              </div>
              <div>
                Password: <input type="password" />
              </div>
            </form>
          </QColumn>
        </QRow>
      </QGrid>
    </div>
  );
}
