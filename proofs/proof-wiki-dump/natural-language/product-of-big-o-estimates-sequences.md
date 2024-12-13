# 

Source: https://proofwiki.org/wiki/Product_of_Big-O_Estimates/Sequences

Theorem
Let $\sequence {a_n}, \sequence {b_n}, \sequence {c_n}, \sequence {d_n}$ be sequences of real or complex numbers.
Let:

$a_n = \map \OO {b_n}$
$c_n = \map \OO {d_n}$
where $\OO$ denotes big-$\OO$ notation.

Then:

$a_n c_n = \map \OO {b_n d_n}$


Proof
Since:

$a_n = \map \OO {b_n}$
there exists a positive real number $C_1$ and natural number $N_1$ such that: 

$\size {a_n} \le C_1 \size {b_n}$
for all $n \ge N_1$. 
Similarly, since: 

$c_n = \map \OO {d_n}$
there exists a positive real number $C_2$ and natural number $N_2$ such that: 

$\size {c_n} \le C_2 \size {d_n}$
for all $n \ge N_2$. 
Let:

$N = \max \set {N_1, N_2}$
Then, for $n \ge N$, we have: 














\(\ds \size {a_n c_n}\)

\(=\)







\(\ds \size {a_n} \size {c_n}\)




















\(\ds \)

\(\le\)







\(\ds C_1 \size {b_n} \size {c_n}\)





since $n \ge N_1$














\(\ds \)

\(\le\)







\(\ds C_1 C_2 \size {b_n} \size {d_n}\)





since $n \ge N_2$














\(\ds \)

\(=\)







\(\ds C_1 C_2 \size {b_n d_n}\)









giving:

$a_n c_n = \map \OO {b_n d_n}$
$\blacksquare$





