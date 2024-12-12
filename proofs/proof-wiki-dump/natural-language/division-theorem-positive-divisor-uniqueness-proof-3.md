# 

Source: https://proofwiki.org/wiki/Division_Theorem/Positive_Divisor/Uniqueness/Proof_3

Theorem
For every pair of integers $a, b$ where $b > 0$, the integers $q, r$ such that $a = q b + r$ and $0 \le r < b$ are unique:

$\forall a, b \in \Z, b > 0: \exists! q, r \in \Z: a = q b + r, 0 \le r < b$


Proof
It is given by Division Theorem: Positive Divisor: Existence that such $q$ and $r$ exist.
Suppose that:

$a = b q_1 + r_1 = b q_2 + r_2$
where both $0 \le r_1 < b$ and $0 \le r_2 < b$.
Without loss of generality, suppose $r_1 \ge r_2$.
Then:

$r_1 - r_2 = b \paren {q_2 - q_1}$
That is:

$b \divides \paren {r_2 - r_1}$
where $\divides$ denotes divisibility.
But:

$r_1 - r_2 < b$
while from Absolute Value of Integer is not less than Divisors: Corollary:

$r_1 - r_2 \ge b$
unless from Integer Divides Zero $r_1 - r_2 = 0$.
So $r_1 = r_2$ and it follows directly that $q_1 = q_2$.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: The Integers: $\S 10$. Divisibility: Theorem $18$
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.1$ The Division Algorithm: Theorem $2 \text{-} 1$ (Division Algorithm)




