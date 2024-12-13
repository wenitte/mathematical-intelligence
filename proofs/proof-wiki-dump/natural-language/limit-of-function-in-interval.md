# 

Source: https://proofwiki.org/wiki/Limit_of_Function_in_Interval

Theorem
Let $f$ be a real function which is defined on the open interval $\openint a b$.
Let $\xi \in \openint a b$
Suppose that, $\forall x \in \openint a b$, either:

$\xi \le \map f x \le x$
or:

$x \le \map f x \le \xi$

Then $\map f x \to \xi$ as $x \to \xi$.


Proof
Note that $\size {\map f x - \xi} \le \size {\xi - x}$.
From Limit of Absolute Value‎ we have that $\size {x - \xi} \to 0$ as $x \to \xi$.
The result follows from the Squeeze Theorem.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 8.15 \ (4)$




