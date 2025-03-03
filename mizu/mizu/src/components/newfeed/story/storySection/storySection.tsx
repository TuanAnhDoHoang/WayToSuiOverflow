import CreateStory from "../createStory";
import Story from "../story";
import styles from './storySection.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function StorySection() {
    const stories = [
        {
            avatarImage: "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-1/480561156_634491585722919_5193215288198790991_n.png?stp=cp0_dst-png_s40x40&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGtGiBnK7fJgBA-Rk2se0UqM537VmaK2RcznftWZorZF1ia1vgZvoxdgvKdoWVmlafEL8qJ4CCsfFBEpp93OWJU&_nc_ohc=sdbKvYLTH-QQ7kNvgHNX8mD&_nc_oc=AdjHYwgkz6N8Qog509JtEkKBjueHtSh6QmycmwM376a_rZeVusEWnNe68Rk6K4eklrgp1SA10MC4o57caCAoNIYa&_nc_zt=24&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=A_UWun1-E4o1JGcpzSejO65&oh=00_AYCc91-NjAvCdNpvrrqIFLOm1OU37JntupuWNda47oywRQ&oe=67CB26D7",
            storyImage: "https://i.ytimg.com/vi/o2jJxBmu1WA/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGEggRyhZMA8=&rs=AOn4CLCzSP13f_7DDHe1UWba6eX_mNpyDw"
        },
        {
            avatarImage: "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-1/480561156_634491585722919_5193215288198790991_n.png?stp=cp0_dst-png_s40x40&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGtGiBnK7fJgBA-Rk2se0UqM537VmaK2RcznftWZorZF1ia1vgZvoxdgvKdoWVmlafEL8qJ4CCsfFBEpp93OWJU&_nc_ohc=sdbKvYLTH-QQ7kNvgHNX8mD&_nc_oc=AdjHYwgkz6N8Qog509JtEkKBjueHtSh6QmycmwM376a_rZeVusEWnNe68Rk6K4eklrgp1SA10MC4o57caCAoNIYa&_nc_zt=24&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=A_UWun1-E4o1JGcpzSejO65&oh=00_AYCc91-NjAvCdNpvrrqIFLOm1OU37JntupuWNda47oywRQ&oe=67CB26D7",
            storyImage: "https://i.ytimg.com/vi/o2jJxBmu1WA/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGEggRyhZMA8=&rs=AOn4CLCzSP13f_7DDHe1UWba6eX_mNpyDw"
        },
        {
            avatarImage: "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-1/480561156_634491585722919_5193215288198790991_n.png?stp=cp0_dst-png_s40x40&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGtGiBnK7fJgBA-Rk2se0UqM537VmaK2RcznftWZorZF1ia1vgZvoxdgvKdoWVmlafEL8qJ4CCsfFBEpp93OWJU&_nc_ohc=sdbKvYLTH-QQ7kNvgHNX8mD&_nc_oc=AdjHYwgkz6N8Qog509JtEkKBjueHtSh6QmycmwM376a_rZeVusEWnNe68Rk6K4eklrgp1SA10MC4o57caCAoNIYa&_nc_zt=24&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=A_UWun1-E4o1JGcpzSejO65&oh=00_AYCc91-NjAvCdNpvrrqIFLOm1OU37JntupuWNda47oywRQ&oe=67CB26D7",
            storyImage: "https://i.ytimg.com/vi/o2jJxBmu1WA/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGEggRyhZMA8=&rs=AOn4CLCzSP13f_7DDHe1UWba6eX_mNpyDw"
        },
        {
            avatarImage: "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-1/480561156_634491585722919_5193215288198790991_n.png?stp=cp0_dst-png_s40x40&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGtGiBnK7fJgBA-Rk2se0UqM537VmaK2RcznftWZorZF1ia1vgZvoxdgvKdoWVmlafEL8qJ4CCsfFBEpp93OWJU&_nc_ohc=sdbKvYLTH-QQ7kNvgHNX8mD&_nc_oc=AdjHYwgkz6N8Qog509JtEkKBjueHtSh6QmycmwM376a_rZeVusEWnNe68Rk6K4eklrgp1SA10MC4o57caCAoNIYa&_nc_zt=24&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=A_UWun1-E4o1JGcpzSejO65&oh=00_AYCc91-NjAvCdNpvrrqIFLOm1OU37JntupuWNda47oywRQ&oe=67CB26D7",
            storyImage: "https://i.ytimg.com/vi/o2jJxBmu1WA/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGEggRyhZMA8=&rs=AOn4CLCzSP13f_7DDHe1UWba6eX_mNpyDw"
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('story-section')}>
                <CreateStory />
                {stories.map(story => (
                    <Story
                        avatarImage={story.avatarImage}
                        storyImage={story.storyImage}
                    />
                ))}
            </div>
        </div>
    );
}

export default StorySection;