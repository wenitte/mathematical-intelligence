# 

Source: https://proofwiki.org/wiki/Order_of_Product_of_Abelian_Group_Elements_Divides_LCM_of_Orders_of_Elements

Theorem
Let $G$ be an abelian group.
Let $a, b \in G$.
Then:

$\order {a b} \divides \lcm \set {\order a, \order b}$
where:

$\order a$ denotes the order of $a$
$\divides$ denotes divisibility
$\lcm$ denotes the lowest common multiple.


Proof
Let $\order a = m, \order b = n$.
Let $c = \lcm \set {m, n}$.
Then:














\(\ds c\)

\(=\)







\(\ds r m\)





for some $r \in \Z$














\(\ds \)

\(=\)







\(\ds s n\)





for some $s \in \Z$




So:














\(\ds \paren {a b}^c\)

\(=\)







\(\ds a^c b^c\)





Power of Product of Commuting Elements in Semigroup equals Product of Powers














\(\ds \)

\(=\)







\(\ds a^{r m} b^{s n}\)




















\(\ds \)

\(=\)







\(\ds \paren {a^m}^r \paren {b^n}^s\)




















\(\ds \)

\(=\)







\(\ds e^r e^s\)





Definition of Order of Group Element














\(\ds \)

\(=\)







\(\ds e\)














\(\ds \leadsto \ \ \)





\(\ds \order {a b}\)

\(\divides\)







\(\ds c\)





Element to Power of Multiple of Order is Identity



$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 41 \beta$




