
import {
    NetInfo
} from 'react-native';

const NOT_NETWORK = "网络链接失败，请检查您的网络设置";
const TAG_NETWORK_CHANGE = "connectionChange";

const checkNetworkState = (callback) => {
    NetInfo.isConnected.fetch().done(
        (isConnected) => {
            callback(isConnected);
        }
    );
}

const removeEventListener = (tag,handler) => {
    NetInfo.isConnected.removeEventListener(tag, handler);
}

const addEventListener = (tag,handler)=>{
    NetInfo.isConnected.addEventListener(tag, handler);
}

export default{
    checkNetworkState,
    addEventListener,
    removeEventListener,
    NOT_NETWORK,
    TAG_NETWORK_CHANGE
}
