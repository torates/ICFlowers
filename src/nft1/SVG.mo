import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Int8 "mo:base/Int8";
import Buffer "mo:base/Buffer";
import Text "mo:base/Text";
import Blob "mo:base/Blob";
import Result "mo:base/Result";
import Iter "mo:base/Iter";
import AID "../motoko/util/AccountIdentifier";
import ExtCore "../motoko/ext/Core";
import ExtCommon "../motoko/ext/Common";
import ExtAllowance "../motoko/ext/Allowance";
import ExtNonFungible "../motoko/ext/NonFungible";
import Traits "Traits";
import AssetStorage "assetstorage";

module SVG {
    private let chance : Int = 100;

    public func make(background : Text, pot : Text, stem : Text, petal : Text) : Text {
        let codetoReturn : Text = "<svg id='generated' style='width: 1280px;height: 1280px;' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1280 1280' xml:space='preserve'><g><image href='data:image/png;base64,"#background#"'></image></g><g><image href='data:image/png;base64,"#pot#"'></image></g><g><image href='data:image/png;base64,"#stem#"'></image></g><g><image href='data:image/png;base64,"#petal#"'></image></g></svg>";
        return codetoReturn;
    };
};