# 

Source: https://proofwiki.org/wiki/Algebraic_Element_of_Degree_3_is_not_Element_of_Field_Extension_of_Degree_Power_of_2

Theorem
Let $K / F$ be a finite field extension of degree $2^m$.
Let $\alpha \in K$ be algebraic over $F$ with degree $3$.

Then $\alpha \notin K$.


Proof
Aiming for a contradiction, suppose $\alpha \in K$.
From Degree of Element of Finite Field Extension divides Degree of Extension:

$\map \deg \alpha \divides \map \deg {K / F}$
But:

$3 \nmid 2^m$
From this contradiction, it follows that $\alpha \notin K$.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Field Extensions: $\S 38$. Simple Algebraic Extensions: Theorem $74 \ \text {(ii)}$




