import IconButton from "./IconButton";

interface INavigationBarProps {
  isDartk: boolean;
  showTitle: boolean;
  showBackButton: boolean;
  showCloseButton: boolean;
  title?: string;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavigationBar({
  isDartk,
  showTitle,
  showBackButton,
  showCloseButton,
  title = "",
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {},
}: INavigationBarProps) {
  return (
    <div className="w-full flex justify-between">
      <div className="navigation-title-wrapper flex">
        {showBackButton && (
          <IconButton
            alt="back-arrow"
            iconPath={`/icons/ic-back-left${isDartk ? "-white" : ""}.svg`}
            onClick={onBackButtonClick}
          />
        )}

        {showTitle && (
          <h1 className={`text-2xl ${isDartk ? "text-white" : "text-primary"}`}>
            {title}
          </h1>
        )}
      </div>
      {showCloseButton && (
        <IconButton
          alt="close"
          iconPath={`/icons/ic-cancel${isDartk ? "-white" : ""}.svg`}
          onClick={onCloseButtonClick}
        />
      )}
    </div>
  );
}
