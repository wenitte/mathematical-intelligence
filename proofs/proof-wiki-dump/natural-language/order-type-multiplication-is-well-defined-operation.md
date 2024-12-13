# 

Source: https://proofwiki.org/wiki/Order_Type_Multiplication_is_Well-Defined_Operation

Theorem
The multiplication operation on order types is well-defined.


Proof
Let $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ be ordered sets.
Let $\struct {T_1, \preccurlyeq_{1'} }$ and $\struct {T_2, \preccurlyeq_{2'} }$ be ordered sets such that:

$\struct {S_1, \preccurlyeq_1}$ is isomorphic to $\struct {T_1, \preccurlyeq_{1'} }$
$\struct {S_2, \preccurlyeq_2}$ is isomorphic to $\struct {T_2, \preccurlyeq_{2'} }$

Let $\alpha := \map \ot {S_1, \preccurlyeq_1}$ and $\beta := \map \ot {S_2, \preccurlyeq_2}$ denote the order types of $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ respectively.
Let $\alpha' := \map \ot {T_1, \preccurlyeq_{1'} }$ and $\beta' := \map \ot {T_2, \preccurlyeq_{2'} }$ denote the order types of $\struct {T_1, \preccurlyeq_{1'} }$ and $\struct {T_2, \preccurlyeq_{2'} }$ respectively.

It is required to show that:

$\alpha \cdot \beta$
is the same as:

$\alpha' \cdot \beta'$

We have that:














\(\ds \alpha \cdot \beta\)

\(=\)







\(\ds \map \ot {\struct {S_1, \preccurlyeq_1} \otimes^a \struct {S_2, \preccurlyeq_2} }\)




















\(\ds \)

\(=\)







\(\ds \map \ot {\struct {T_1, \preccurlyeq_{1'} } \otimes^a \struct {T_2, \preccurlyeq_{2'} } }\)





Order Isomorphism is Preserved by Antilexicographic Order














\(\ds \)

\(=\)







\(\ds \alpha' \cdot \beta'\)









$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $33$




