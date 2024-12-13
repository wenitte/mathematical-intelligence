# 

Source: https://proofwiki.org/wiki/Polynomial_Ring_of_Sequences_is_Ring



Theorem
Let $R$ be a ring.
Let $P \sqbrk R$ be the polynomial ring over sequences in $R$.

Then $P \sqbrk R$ is itself a ring.


Proof
We have by definition of polynomial ring over sequences in $R$ that:

$P \sqbrk R = \set {\sequence {r_0, r_1, r_2, \ldots} }$
where each $r_i \in R$, and all but a finite number of terms is zero.


Proof that Operations are Closed
We need to ensure that the operations as defined are closed.
Let $r = \sequence {r_0, r_1, r_2, \ldots}, s = \sequence {s_0, s_1, s_2, \ldots} \in P \sqbrk R$.
As all but a finite number of terms of $r$ and $s$ are zero, there exist $m, n \ge 0$ such that:

$\forall i > m: r_i = 0$
$\forall j > n: s_j = 0$
Let $l = \max \set {m, n}$.

We can express the operations on $P \sqbrk R$ as:




\(\text {(1)}: \quad\)









\(\ds \sequence {r_0, r_1, \ldots, r_m} + \sequence {s_0, s_1, \ldots, s_n}\)

\(=\)







\(\ds \sequence {r_0 + s_0, r_1 + s_1, \ldots, r_l + s_l}\)










\(\text {(2)}: \quad\)









\(\ds -\sequence {r_0, r_1, \ldots, r_m}\)

\(=\)







\(\ds \sequence {-r_0, -r_1, \ldots, -r_m}\)










\(\text {(3)}: \quad\)









\(\ds \sequence {r_0, r_1, \ldots, r_m} \sequence {s_0, s_1, \ldots, s_n}\)

\(=\)







\(\ds \sequence {t_0, t_1, \ldots, t_{m + n} }\)





where $\ds t_k = \sum_{i \mathop + j \mathop = k} r_i s_j$




We have that:

$\forall i > l: r_i + s_i = 0$
and so 

$r + s \in P \sqbrk R$
Equally clearly:

$-r \in P \sqbrk R$
Now consider:

$\ds \paren {r s}_i = \sum_{j \mathop + k \mathop = i}r_j s_k$
Let $i > m + n$.
Then in any $r_j s_k$ such that $j + k = i$, either $j > m$ or k > n.
In the first case $r_j = 0$ and in the second $s_j = 0$.
In either case $r_j s_k = 0$.
So:

$\ds \forall i > m + n: \paren {r s}_i = \sum_{j \mathop + k \mathop = i} r_j s_k = 0$
So:

$r s \in P \sqbrk R$
$\Box$


Proof of Additive Group
The addition operation $r + s$ is clearly commutative and associative, and:

$\sequence {0, 0, \ldots} = 0_{P \sqbrk R}$
Equally clearly:

$\forall r \in P \sqbrk R: r + \paren {-r} = \sequence {r_i + \paren {-r_i} } = \sequence {0, 0, \ldots} = 0_{P \sqbrk R}$
and so $-r$ is the inverse of $r$ for addition.
So $\struct {P \sqbrk R, +}$ is an abelian group, as it needs to be for $P \sqbrk R$ to be a ring.
$\Box$


Proof of Ring Product
We need to establish that the ring product is associative.
Let $r = \sequence {r_0, r_1, \ldots}, s = \sequence {s_0, s_1, \ldots}, t = \sequence {t_0, t_1, \ldots} \in P \sqbrk R$.
Then:














\(\ds \paren {\paren {r s} t}_n\)

\(=\)







\(\ds \sum_{i \mathop + j \mathop = n} \paren {r s}_i t_j\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop + j \mathop = n} \paren {\sum_{k \mathop + l \mathop = i} r_k s_l} t_j\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop + l \mathop + j \mathop = n} r_k s_l t_j\)









Similarly for $\paren {r \paren {s t} }_n$.
So the ring product is associative, and so forms a semigroup.
$\Box$


Proof of Distributivity
Finally we need to show that the ring product is distributive over ring addition.















\(\ds \paren {\paren {r + s} t}_n\)

\(=\)







\(\ds \sum_{i \mathop + j \mathop = n} \paren {r_i + s_i} t_j\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop + j \mathop = n} r_i t_j + \sum_{i \mathop + j \mathop = n} s_i t_j\)




















\(\ds \)

\(=\)







\(\ds \paren {r t}_n + \paren {s t}_n\)









Similarly for $\paren {t \paren {r + s} }_n$.
Hence the result.
$\blacksquare$


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 3.2$: Polynomial rings: Theorem $3.5$




