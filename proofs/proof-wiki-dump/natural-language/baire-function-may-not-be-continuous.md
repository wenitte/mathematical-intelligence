# 

Source: https://proofwiki.org/wiki/Baire_Function_may_not_be_Continuous

Theorem
Let $X \subseteq \R$.
Let $f : X \to \R$ be a Baire function.

Then $f$ is not necessarily continuous.


Proof
Let:

$X = \closedint 0 1$
For each $n$, define the function $f_n : \closedint 0 1 \to \R$ to have: 

$\map {f_n} x = x^n$
for each $x \in \closedint 0 1$.
Note that for $0 \le x < 1$, we have: 

$x^n \to 0$
Note also that: 

$\map {f_n} 1 = 1$
so:

$\map {f_n} 1 \to 1$
Define $f : \closedint 0 1 \to \R$ by: 

$\ds \map f x = \begin{cases}0 & 0 \le x < 1 \\ 1 & x = 1\end{cases}$
for each $x \in \closedint 0 1$.
We have: 

$\sequence {f_n}$ converges to $f$ pointwise.
Clearly $f$ is not continuous at $1$, since:

$\size {\map f x - \map f 1} = 1$
for any $x \in \hointr 0 1$.
So $f$ is a Baire function that is not continuous. 
$\blacksquare$


Also see
Continuous Real Function is Baire Function: this result shows that the converse of that result is false.
Set of Discontinuities of Baire Function is Meager: quantifies the discontinuity sets of Baire functions more precisely.




