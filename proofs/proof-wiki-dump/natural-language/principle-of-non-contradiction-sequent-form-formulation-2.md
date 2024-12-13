# 

Source: https://proofwiki.org/wiki/Principle_of_Non-Contradiction/Sequent_Form/Formulation_2



Theorem
$\vdash \neg \paren {p \land \neg p}$


Proof 1
By the tableau method of natural deduction:


$\vdash \neg \left({p \land \neg p}\right)$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land \neg p$

Assumption

(None)




2


1

$p$

Rule of Simplification: $\land \EE_1$

1




3


1

$\neg p$

Rule of Simplification: $\land \EE_2$

1




4


1

$\bot$

Principle of Non-Contradiction: $\neg \EE$

2, 3




5




$\neg \left({p \land \neg p}\right)$

Proof by Contradiction: $\neg \II$

1 – 4

Assumption 1 has been discharged

$\blacksquare$


Proof 2
We apply the Method of Truth Tables to the proposition $\neg \left({p \land \neg p}\right)$.
As can be seen by inspection, the truth value of the main connective, that is $\neg$, is $T$ for each boolean interpretation for $p$.

$\begin{array}{|ccccc|} \hline
\neg & (p & \land & \neg & p)\\
\hline
T & F & F & T & F \\
T & T & F & F & T \\
\hline
\end{array}$
$\blacksquare$


Sources
1946: Alfred Tarski: Introduction to Logic and to the Methodology of Deductive Sciences (2nd ed.) ... (previous) ... (next): $\S \text{II}.13$: Symbolism of sentential calculus
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.6$: Reference Formulae: $RF \, 1$




