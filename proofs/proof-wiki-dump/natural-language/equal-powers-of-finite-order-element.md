# 

Source: https://proofwiki.org/wiki/Equal_Powers_of_Finite_Order_Element



Theorem
Let $G$ be a group whose identity is $e$.
Let $g \in G$ be of finite order.
Let $\order g = k$.

Then:

$g^r = g^s \iff k \divides \paren {r - s}$


Proof
Necessary Condition
Suppose that $k \divides \paren {r - s}$.
From the definition of divisor:

$k \divides \left({r - s}\right) \implies \exists t \in \Z: r - s = k t$
So:

$g^{r - s} = g^{k t}$
Thus:














\(\ds g^r\)

\(=\)







\(\ds g^{s + k t}\)




















\(\ds \)

\(=\)







\(\ds g^s g^{k t}\)




















\(\ds \)

\(=\)







\(\ds g^s \paren {g^k}^t\)




















\(\ds \)

\(=\)







\(\ds g^s \paren e^t\)




















\(\ds \)

\(=\)







\(\ds g^s\)









$\Box$


Sufficient Condition
Let $g^r = g^s$.
Then:

$g^{r - s} = g^r g^{-s} = g^s g^{-s} = e$
 
By the Division Theorem:

$r - s = q k + t$
for some $q \in \Z, 0 \le t < k$.
Thus:

$e = g^{r - s} = g^{k q + t} = \paren {g^k}^q g^t = e^q g^t = g^t$

So by the definition of $k$:

$\paren {t < k} \land \paren {e = g^t} \implies t = 0$
So:

$r - s = q k + 0 = q k \implies k \divides \paren {r - s}$
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 5.4$. Cyclic groups
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $3$: Elementary consequences of the definitions: Proposition $3.10$




