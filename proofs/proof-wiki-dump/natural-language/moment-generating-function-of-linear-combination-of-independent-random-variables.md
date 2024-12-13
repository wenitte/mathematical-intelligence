# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Linear_Combination_of_Independent_Random_Variables

Theorem
Let $X_1, X_2, \ldots, X_n$ be independent random variables. 
Let $k_1, k_2, \ldots, k_n$ be real numbers.
Let: 

$\ds X = \sum_{i \mathop = 1}^n k_i X_i$
Let $M_{X_i}$ be the moment generating function of $X_i$ for $1 \le i \le n$.
Then: 

$\ds \map {M_X} t = \prod_{i \mathop = 1}^n \map {M_{X_i}} {k_i t}$
for all $t$ such that $M_{X_i}$ exists for all $1 \le i \le n$.


Proof













\(\ds \map {M_X} t\)

\(=\)







\(\ds \expect {\map \exp {t X} }\)





Definition of Moment Generating Function














\(\ds \)

\(=\)







\(\ds \expect {\map \exp {t \sum_{i \mathop = 1}^n k_i X_i} }\)




















\(\ds \)

\(=\)







\(\ds \expect {\prod_{i \mathop = 1}^n \map \exp {t k_i X_i} }\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \prod_{i \mathop = 1}^n \expect {\map \exp {t k_i X_i} }\)





Condition for Independence from Product of Expectations














\(\ds \)

\(=\)







\(\ds \prod_{i \mathop = 1}^n \map {M_{X_i} } {k_i t}\)





Definition of Moment Generating Function



$\blacksquare$





