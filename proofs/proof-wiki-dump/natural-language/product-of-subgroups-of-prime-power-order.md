# 

Source: https://proofwiki.org/wiki/Product_of_Subgroups_of_Prime_Power_Order

Theorem
Let $p$ be a prime number.
Let $G$ be a group of order $p^a k$, where:

$a \in \Z_{>0}$ is a (strictly) positive integer
$p$ is not a divisor of $k$.
Let $P \le G$ be a subgroup of $G$ of order $p^a$.
Let $Q \le G$ be a subgroup of $G$ of order $p^b$, where $0 < b \le a$.

Let it be the case that $Q$ is not a subgroup of $P$.
Then $P Q$ is not a subgroup of $G$.


Proof
From Intersection of Subgroups is Subgroup, $P \cap Q$ is a subgroup of $P$.
Thus:

$\order {P \cap Q} = p^c$ for some $c \in \Z$ such that $0 \le c \le a$
where $\order {P \cap Q}$ denotes the order of $P \cap Q$.
We have:














\(\ds \order {P Q}\)

\(=\)







\(\ds \frac {\order P \order Q} {\order {P \cap Q} }\)





Order of Subgroup Product














\(\ds \)

\(=\)







\(\ds \frac {p^a p^b} {p^c}\)




















\(\ds \)

\(=\)







\(\ds p^{a + b - c}\)










Aiming for a contradiction, suppose $P Q$ is a subgroup of $G$.
By Lagrange's Theorem (Group Theory):

$\order {P Q} \divides \order G$
where $\divides$ denotes divisibility.
We have that $\order {P Q}$ is a power of $p$.
The highest power of $p$ which divides $\order G$ is $p^a$.
Thus $P Q$ could have order $p^a$ at most.
Thus:

$a + b - c \le a$
That is:

$b \le c$
But $P \cap Q$ is a subgroup of $P$.
Hence it must be the case that $b = c$.
Thus:

$P \cap Q = Q$
and so $Q$ is a subgroup of $P$.
This contradicts the fact that $Q$ is not a subgroup of $P$.
It must follow that $P Q$ is not a subgroup of $G$.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $5$: Cosets and Lagrange's Theorem: Exercise $6$




