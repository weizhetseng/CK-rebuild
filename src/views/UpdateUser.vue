<template>
    <div class="row">
        <div class="col-3">
            <ul>
                <li>
                    <RouterLink to="/memberCenter/orderSearch">查詢訂單</RouterLink>
                </li>
                <li>
                    <RouterLink to="/memberCenter/updateUser">修改會員資料</RouterLink>
                </li>
                <li>
                    <RouterLink to="/memberCenter/changePW">變更會員密碼</RouterLink>
                </li>
                <li>
                    <RouterLink to="/memberCenter/bindOther">綁定其他帳號</RouterLink>
                </li>
            </ul>
        </div>
        <div class="col-9">
            <RouterView />
        </div>
    </div>
</template>
