# 

Source: https://proofwiki.org/wiki/Difference_of_Functions_of_Bounded_Variation_is_of_Bounded_Variation

Theorem
Let $a, b$ be real numbers with $a < b$.
Let $f, g : \closedint a b \to \R$ be functions of bounded variation.
Let $\map {V_f} {\closedint a b}$ and $\map {V_g} {\closedint a b}$ be the total variations of $f$ and $g$ respectively, on $\closedint a b$. 

Then $f - g$ is of bounded variation with:

$\map {V_{f - g} } {\closedint a b} \le \map {V_f} {\closedint a b} + \map {V_g} {\closedint a b}$
where $V_{f - g}$ denotes the total variation of $f - g$ on $\closedint a b$.


Proof
By Multiple of Function of Bounded Variation is of Bounded Variation, we have that: 

$-g$ is of bounded variation.
So, by Sum of Functions of Bounded Variation is of Bounded Variation, we have that: 

$f + \paren {-g} = f - g$ is of bounded variation
with: 

$\map {V_{f - g} } {\closedint a b} \le \map {V_f} {\closedint a b} + \map {V_{-g} } {\closedint a b}$
where $V_{-g}$ is the total variation of $-g$ on $\closedint a b$. 
We have, by Multiple of Function of Bounded Variation is of Bounded Variation:














\(\ds \map {V_{-g} } {\closedint a b}\)

\(=\)







\(\ds \size {-1} \map {V_g} {\closedint a b}\)




















\(\ds \)

\(=\)







\(\ds \map {V_g} {\closedint a b}\)









so: 

$\map {V_{f - g} } {\closedint a b} \le \map {V_f} {\closedint a b} + \map {V_g} {\closedint a b}$
$\blacksquare$


Sources
1973: Tom M. Apostol: Mathematical Analysis (2nd ed.) ... (previous) ... (next): $\S 6.4$: Total Variation: Theorem $6.9$




