# 

Source: https://proofwiki.org/wiki/Norm_of_Inverse_of_Sequence_of_Invertible_Elements_Converging_to_Non-Invertible_Element_in_Unital_Banach_Algebra

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital Banach algebra.
Let $\map G A$ be the group of units of $A$.
Let $x \in A \setminus \map G A$. 
Let $\sequence {x_n}_{n \in \N}$ be a sequence in $\map G A$ such that $x_n \to x$. 

Then $\norm {x_n^{-1} } \to \infty$ as $n \to \infty$. 


Proof
Note that if there existed $n \in \N$ such that: 

$\ds \norm {x - x_n} < \frac 1 {\norm {x_n^{-1} } }$
then we would have $x \in \map G A$ from Group of Units in Unital Banach Algebra is Open. 
So, we have: 

$\ds \frac 1 {\norm {x_n^{-1} } } \le \norm {x - x_n}$ for each $n \in \N$.
Since we have $x_n \to x$, we have $\norm {x - x_n} \to 0$, and hence: 

$\ds \frac 1 {\norm {x_n^{-1} } } \to 0$ as $n \to \infty$.
So:

$\norm {x_n^{-1} } \to \infty$ as $n \to \infty$.
$\blacksquare$





