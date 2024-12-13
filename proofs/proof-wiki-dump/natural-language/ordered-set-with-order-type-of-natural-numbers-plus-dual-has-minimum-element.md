# 

Source: https://proofwiki.org/wiki/Ordered_Set_with_Order_Type_of_Natural_Numbers_plus_Dual_has_Minimum_Element

Theorem
Let $\struct {S, \preccurlyeq}$ be an ordered structure such that:

$\map \ot {S, \preccurlyeq} = \omega + \omega^*$
where:

$\ot$ denotes order type
$\omega$ denotes the order type of the natural numbers $\N$
$\omega^*$ denotes the dual of $\omega$
$+$ denotes addition of order types.

Then $\struct {S, \preccurlyeq}$ has a smallest element.


Proof
By definition of order type addition:

$\struct {S, \preccurlyeq}$ is isomorphic to $\struct {\N, \le} \oplus \struct {\N, \ge}$
where:

$\cong$ denotes order isomorphism
$\oplus$ denotes order sum.
By the Well-Ordering Principle, $\struct {\N, \le}$ has a smallest element.
By definition of order sum, every element of $\struct {\N, \le}$ precedes every element of $\struct {\N, \ge}$.
Hence the smallest element of $\struct {\N, \le}$ is also the smallest element of $\struct {\N, \le} \oplus \struct {\N, \ge}$.
Hence the result.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $28 \ \text {(b)}$




