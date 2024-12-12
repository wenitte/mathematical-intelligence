# 

Source: https://proofwiki.org/wiki/Fundamental_Theorem_of_Calculus/Second_Part/Proof_2

  This article was Featured Proof between 17th November 2014 and 12th September 2015.
Theorem
Let $f$ be a real function which is continuous on the closed interval $\closedint a b$.
Then:

$(1): \quad f$ has a primitive on $\closedint a b$
$(2): \quad$ If $F$ is any primitive of $f$ on $\closedint a b$, then:
$\ds \int_a^b \map f t \rd t = \map F b - \map F a = \bigintlimits {\map F t} a b$


Proof
As $f$ is continuous, by the first part of the theorem, it has a primitive. Call it $F$.
$\closedint a b$ can be divided into any number of closed subintervals of the form $\closedint {x_{k - 1} } {x_k}$ where:

$a = x_0 < x_1 \cdots < x_{k-1} < x_k = b$
Fix such a finite subdivision of the interval $\closedint a b$; call it $P$.

Next, we observe the following telescoping sum identity:




\(\text {(1)}: \quad\)









\(\ds \sum_{i \mathop = 1}^k \paren {\map F {x_i} - \map F {x_{i - 1} } }\)

\(=\)







\(\ds \map F b - \map F a\)









Because $F' = f$, $F$ is differentiable.
By Differentiable Function is Continuous, $F$ is also continuous.
Therefore we can apply the Mean Value Theorem on $F$.
It follows that in every closed subinterval $I_i = \closedint {x_{i - 1} } {x_i}$ there is some $c_i$ such that:

$\map {F'} {c_i} = \dfrac {\map F {x_i} - \map F {x_{i - 1} } } {x_i - x_{i - 1} }$
It follows that:














\(\ds \map F {x_i} - \map F {x_{i - 1} }\)

\(=\)







\(\ds \map {F'} {c_i} \paren {x_i - x_{i - 1} }\)










\(\text {(2)}: \quad\)









\(\ds \map F b - \map F z\)

\(=\)







\(\ds \sum_{i \mathop = 1}^k \map {F'} {c_i} \paren {x_i - x_{i - 1} }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^k \map f {c_i} \paren {x_i - x_{i - 1} }\)





because $F' = f$




From the definitions of supremum and infimum, we have for all $i$ (recall $I_i = \closedint {x_{i - 1} } {x_i}$):

$\displaystyle \inf_{x \mathop \in I_i} \map f x \le \map f {c_i} \le \sup_{x \mathop \in I_i} \map f x$
From the definitions of upper Darboux sum and lower Darboux sum, we conclude for any finite subdivision $P$:

$\displaystyle \map L P \le \sum_{i \mathop = 1}^k \map f {c_i} \paren {x_i - x_{i - 1} } \le \map U P$
Lastly, from the definition of a definite integral and from $(2)$, we conclude:

$\displaystyle \map F b - \map F a = \int_a^b \map f t \rd t$
$\blacksquare$


Sources
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.): $\S 4.4$




