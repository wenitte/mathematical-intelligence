# 

Source: https://proofwiki.org/wiki/Order_Type_Addition_is_not_Commutative

Theorem
The operation of order type addition is not commutative.


Proof
Consider the order type $\omega^* + \omega$, where:

$\omega$ denotes the order type of the natural numbers $\N$
$\omega^*$ denotes the dual of $\omega$
$+$ denotes addition of order types.
From Order Type of Integers under Usual Ordering, this is the order type of $\struct {\Z, \le}$, the set of integers under the usual ordering.

Now consider order type $\omega + \omega^*$.
From Ordered Set with Order Type of Natural Numbers plus Dual has Minimum Element, this is the order type of an ordered structure $\struct {S, \preccurlyeq}$ which has a smallest element.
But $\struct {\Z, \le}$ has no such smallest element.
It follows that $\struct {\Z, \le}$ is not isomorphic to $\struct {S, \preccurlyeq}$.
Hence $\omega + \omega^*$ and $\omega^* + \omega$ are different order types.
The result follows.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $28 \ \text {(c)}$




