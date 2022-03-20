export const idlFactory = ({ IDL }) => {
  const TokenIdentifier = IDL.Text;
<<<<<<< HEAD
  const AccountIdentifier__1 = IDL.Text;
  const User = IDL.Variant({
    'principal' : IDL.Principal,
    'address' : AccountIdentifier__1,
=======
  const AccountIdentifier = IDL.Text;
  const User = IDL.Variant({
    'principal' : IDL.Principal,
    'address' : AccountIdentifier,
>>>>>>> 0838e5d3e009742de0a1933affcdd17062508450
  });
  const AllowanceRequest = IDL.Record({
    'token' : TokenIdentifier,
    'owner' : User,
    'spender' : IDL.Principal,
  });
  const Balance__1 = IDL.Nat;
  const CommonError = IDL.Variant({
    'InvalidToken' : TokenIdentifier,
    'Other' : IDL.Text,
  });
  const Result = IDL.Variant({ 'ok' : Balance__1, 'err' : CommonError });
  const SubAccount = IDL.Vec(IDL.Nat8);
  const Balance = IDL.Nat;
  const ApproveRequest = IDL.Record({
    'token' : TokenIdentifier,
    'subaccount' : IDL.Opt(SubAccount),
    'allowance' : Balance,
    'spender' : IDL.Principal,
  });
  const BalanceRequest = IDL.Record({
    'token' : TokenIdentifier,
    'user' : User,
  });
  const CommonError__1 = IDL.Variant({
    'InvalidToken' : TokenIdentifier,
    'Other' : IDL.Text,
  });
  const BalanceResponse = IDL.Variant({
    'ok' : Balance,
    'err' : CommonError__1,
  });
  const TokenIdentifier__1 = IDL.Text;
<<<<<<< HEAD
  const AccountIdentifier__2 = IDL.Text;
  const Result_2 = IDL.Variant({
    'ok' : AccountIdentifier__2,
    'err' : CommonError,
  });
  const Permissions = IDL.Record({
    'canGet' : IDL.Vec(IDL.Principal),
    'canVerify' : IDL.Vec(IDL.Principal),
  });
  const AccountIdentifier = IDL.Variant({
    'principal' : IDL.Principal,
    'blob' : IDL.Vec(IDL.Nat8),
    'text' : IDL.Text,
  });
  const TokenVerbose = IDL.Record({
    'decimals' : IDL.Int,
    'meta' : IDL.Opt(IDL.Record({ 'Issuer' : IDL.Text })),
    'symbol' : IDL.Text,
  });
  const Details = IDL.Record({
    'meta' : IDL.Vec(IDL.Nat8),
    'description' : IDL.Text,
  });
  const Invoice = IDL.Record({
    'id' : IDL.Nat,
    'permissions' : IDL.Opt(Permissions),
    'creator' : IDL.Principal,
    'destination' : AccountIdentifier,
    'token' : TokenVerbose,
    'paid' : IDL.Bool,
    'verifiedAtTime' : IDL.Opt(IDL.Int),
    'amountPaid' : IDL.Nat,
    'expiration' : IDL.Int,
    'details' : IDL.Opt(Details),
    'amount' : IDL.Nat,
  });
  const CreateInvoiceSuccess = IDL.Record({ 'invoice' : Invoice });
  const CreateInvoiceErr = IDL.Record({
    'kind' : IDL.Variant({
      'InvalidDetails' : IDL.Null,
      'InvalidAmount' : IDL.Null,
      'InvalidDestination' : IDL.Null,
      'InvalidToken' : IDL.Null,
      'Other' : IDL.Null,
    }),
    'message' : IDL.Opt(IDL.Text),
  });
  const CreateInvoiceResult = IDL.Variant({
    'ok' : CreateInvoiceSuccess,
    'err' : CreateInvoiceErr,
  });
=======
  const AccountIdentifier__1 = IDL.Text;
  const Result_2 = IDL.Variant({
    'ok' : AccountIdentifier__1,
    'err' : CommonError,
  });
>>>>>>> 0838e5d3e009742de0a1933affcdd17062508450
  const Extension = IDL.Text;
  const TokenIndex = IDL.Nat32;
  const Metadata = IDL.Variant({
    'fungible' : IDL.Record({
      'decimals' : IDL.Nat8,
      'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)),
      'name' : IDL.Text,
      'symbol' : IDL.Text,
    }),
    'nonfungible' : IDL.Record({ 'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)) }),
  });
  const HeaderField = IDL.Tuple(IDL.Text, IDL.Text);
  const HttpRequest = IDL.Record({
    'url' : IDL.Text,
    'method' : IDL.Text,
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
  });
  const StreamingCallbackToken = IDL.Record({
    'key' : IDL.Text,
    'sha256' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'index' : IDL.Nat,
    'content_encoding' : IDL.Text,
  });
  const StreamingCallbackHttpResponse = IDL.Record({
    'token' : IDL.Opt(StreamingCallbackToken),
    'body' : IDL.Vec(IDL.Nat8),
  });
  const StreamingStrategy = IDL.Variant({
    'Callback' : IDL.Record({
      'token' : StreamingCallbackToken,
      'callback' : IDL.Func(
          [StreamingCallbackToken],
          [StreamingCallbackHttpResponse],
          ['query'],
        ),
    }),
  });
  const HttpResponse = IDL.Record({
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
    'streaming_strategy' : IDL.Opt(StreamingStrategy),
    'status_code' : IDL.Nat16,
  });
  const Result_1 = IDL.Variant({ 'ok' : Metadata, 'err' : CommonError });
  const MintRequest = IDL.Record({
    'to' : User,
    'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const Memo = IDL.Vec(IDL.Nat8);
  const TransferRequest = IDL.Record({
    'to' : User,
    'token' : TokenIdentifier,
    'notify' : IDL.Bool,
    'from' : User,
    'memo' : Memo,
    'subaccount' : IDL.Opt(SubAccount),
    'amount' : Balance,
  });
  const TransferResponse = IDL.Variant({
    'ok' : Balance,
    'err' : IDL.Variant({
<<<<<<< HEAD
      'CannotNotify' : AccountIdentifier__1,
      'InsufficientBalance' : IDL.Null,
      'InvalidToken' : TokenIdentifier,
      'Rejected' : IDL.Null,
      'Unauthorized' : AccountIdentifier__1,
      'Other' : IDL.Text,
    }),
  });
  const VerifyInvoiceSuccess = IDL.Variant({
    'Paid' : IDL.Record({ 'invoice' : Invoice }),
    'AlreadyVerified' : IDL.Record({ 'invoice' : Invoice }),
  });
  const VerifyInvoiceErr = IDL.Record({
    'kind' : IDL.Variant({
      'InvalidAccount' : IDL.Null,
      'TransferError' : IDL.Null,
      'NotFound' : IDL.Null,
      'NotAuthorized' : IDL.Null,
      'InvalidToken' : IDL.Null,
      'InvalidInvoiceId' : IDL.Null,
      'Other' : IDL.Null,
      'NotYetPaid' : IDL.Null,
      'Expired' : IDL.Null,
    }),
    'message' : IDL.Opt(IDL.Text),
  });
  const VerifyInvoiceResult = IDL.Variant({
    'ok' : VerifyInvoiceSuccess,
    'err' : VerifyInvoiceErr,
  });
=======
      'CannotNotify' : AccountIdentifier,
      'InsufficientBalance' : IDL.Null,
      'InvalidToken' : TokenIdentifier,
      'Rejected' : IDL.Null,
      'Unauthorized' : AccountIdentifier,
      'Other' : IDL.Text,
    }),
  });
>>>>>>> 0838e5d3e009742de0a1933affcdd17062508450
  const erc721_token = IDL.Service({
    'acceptCycles' : IDL.Func([], [], []),
    'allowance' : IDL.Func([AllowanceRequest], [Result], ['query']),
    'approve' : IDL.Func([ApproveRequest], [], []),
    'availableCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'balance' : IDL.Func([BalanceRequest], [BalanceResponse], ['query']),
    'bearer' : IDL.Func([TokenIdentifier__1], [Result_2], ['query']),
<<<<<<< HEAD
    'check_license_status' : IDL.Func([], [IDL.Bool], ['query']),
    'create_invoice' : IDL.Func([], [CreateInvoiceResult], []),
=======
>>>>>>> 0838e5d3e009742de0a1933affcdd17062508450
    'extensions' : IDL.Func([], [IDL.Vec(Extension)], ['query']),
    'getAllowances' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(TokenIndex, IDL.Principal))],
        ['query'],
      ),
    'getRegistry' : IDL.Func(
        [],
<<<<<<< HEAD
        [IDL.Vec(IDL.Tuple(TokenIndex, AccountIdentifier__2))],
=======
        [IDL.Vec(IDL.Tuple(TokenIndex, AccountIdentifier__1))],
>>>>>>> 0838e5d3e009742de0a1933affcdd17062508450
        ['query'],
      ),
    'getTokens' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(TokenIndex, Metadata))],
        ['query'],
      ),
<<<<<<< HEAD
    'getTrait' : IDL.Func([IDL.Vec(IDL.Int)], [IDL.Vec(IDL.Int8)], []),
    'get_invoice' : IDL.Func([], [IDL.Opt(Invoice)], ['query']),
=======
>>>>>>> 0838e5d3e009742de0a1933affcdd17062508450
    'http_request' : IDL.Func([HttpRequest], [HttpResponse], ['query']),
    'inc' : IDL.Func([], [IDL.Nat], []),
    'metadata' : IDL.Func([TokenIdentifier__1], [Result_1], ['query']),
    'mintNFT' : IDL.Func([MintRequest], [TokenIndex], []),
<<<<<<< HEAD
    'remaining_cycles' : IDL.Func([], [IDL.Nat], ['query']),
=======
>>>>>>> 0838e5d3e009742de0a1933affcdd17062508450
    'setMinter' : IDL.Func([IDL.Principal], [], []),
    'supply' : IDL.Func([TokenIdentifier__1], [Result], ['query']),
    'toBytes' : IDL.Func([IDL.Text], [IDL.Vec(IDL.Nat8)], []),
    'tokenIdentifier' : IDL.Func(
        [IDL.Text, TokenIndex],
        [TokenIdentifier__1],
        [],
      ),
    'transfer' : IDL.Func([TransferRequest], [TransferResponse], []),
<<<<<<< HEAD
    'verify_invoice' : IDL.Func([], [VerifyInvoiceResult], []),
=======
>>>>>>> 0838e5d3e009742de0a1933affcdd17062508450
  });
  return erc721_token;
};
export const init = ({ IDL }) => { return [IDL.Principal]; };
