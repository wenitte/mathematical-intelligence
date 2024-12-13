# 

Source: https://proofwiki.org/wiki/Group_of_Order_p_q_is_Cyclic/Lemma

Lemma for Group of Order $p q$ is Cyclic
Let $p, q$ be primes such that $p < q$ and $p$ does not divide $q - 1$.
Let $G$ be a group of order $p q$.

There is:

exactly one Sylow $p$-subgroup of $G$.
exactly one Sylow $q$-subgroup of $G$.


Proof
Let $H$ be a Sylow $p$-subgroup of $G$.
Let $K$ be a Sylow $q$-subgroup of $G$.  
By the Fourth Sylow Theorem, the number of Sylow $p$-subgroups of $G$ is of the form $1 + k p$ and divides $p q$.

We have that $1 + k p$ cannot divide $p$.
Then $1 + k p$ must divide $q$.
But as $q$ is prime, either:

$1 + k p = 1$
or:

$1 + k p = q$
But:














\(\ds 1 + k p\)

\(=\)







\(\ds q\)














\(\ds \leadsto \ \ \)





\(\ds k p\)

\(=\)







\(\ds q - 1\)














\(\ds \leadsto \ \ \)





\(\ds p\)

\(\divides\)







\(\ds q - 1\)









which contradicts our condition that $p$ does not divide $q - 1$.
Hence $1 + k p = 1$.
Thus there is only one Sylow $p$-subgroup of $G$.

Similarly, there is only one Sylow $q$-subgroup of $G$.
$\blacksquare$





