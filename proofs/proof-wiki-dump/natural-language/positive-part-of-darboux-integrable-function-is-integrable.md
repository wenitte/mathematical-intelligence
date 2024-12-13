# 

Source: https://proofwiki.org/wiki/Positive_Part_of_Darboux_Integrable_Function_is_Integrable

Theorem
Let $f$ be a real function that is Darboux integrable over $\closedint a b$.
Let $f^+$ be the positive part of $f$.
Then $f^+$ is Darboux integrable over $\closedint a b$.


Corollary
Let $f$ be a real function that is Darboux integrable over $\closedint a b$.
Let $f^-$ be the negative part of $f$.
Then $f^-$ is Darboux integrable over $\closedint a b$.


Proof
Let $\epsilon > 0$ be a strictly positive real number.
By Condition for Darboux Integrability, there is a finite subdivision $P = \sequence {x_i}_{0 \mathop \le i \mathop \le n}$ such that:

$\map {U_f} P - \map {L_f} P < \epsilon$
where $\map {U_f} P$ and $\map {L_f} P$ are the upper Darboux sum and lower Darboux sum, respectively.

Consider the terms of $\map {U_f} P$ and $\map {L_f} P$ for an arbitrary index $i$.
By Supremum does not Precede Infimum:

$m_i^{\paren f} \le M_i^{\paren f}$
where $m_i^{\paren f}$ and $M_i^{\paren f}$ are respectively the infimum and supremum of $f$ on $\closedint {x_{i - 1} } {x_i}$.
Therefore, there are three cases to consider:

If $0 \le m_i^{\paren f} \le M_i^{\paren f}$:

In this case, it follows from the definition of infimum that:
$\forall x \in \closedint {x_{i - 1} } {x_i}: \map f x \ge 0$
Therefore, on that interval, $\map {f^+} x = \map f x$.
So:
$M_i^{\paren {f^+} } - m_i^{\paren f} = M_i^{\paren f} - m_i^{\paren f}$

If $m_i^{\paren f} < 0 \le M_i^{\paren f}$:

Because $\map {f^+} x \ge 0$, it follows that $m_i^{\paren {f^+} } \ge 0 > m_i^{\paren f}$.
As $0 \le M_i^{\paren f}$, it follows that $\sup \paren {f \closedint a b \cup \set 0} = M_i^{\paren f}$.
But $f^+ \closedint {x_{i - 1} } {x_i} \subseteq f \closedint {x_{i - 1} } {x_i} \cup \set 0$, so by Supremum of Subset:
$M_i^{\paren {f^+} } \leq M_i^{\paren f}$
Therefore:
$M_i^{\paren {f^+} } - m_i^{\paren {f^+} } < M_i^{\paren f} - m_i^{\paren f}$

If $m_i^{\paren f} \le M_i^{\paren f} < 0$:

Because $M_i^{\paren f} < 0$, it follows that $f$ is strictly negative on $\closedint {x_{i - 1} } {x_i}$.
Thus, $\forall x \in \closedint {x_{i - 1} } {x_i}: \map {f^+} x = 0$.
Therefore:
$m_i^{\paren {f^+} } = M_i^{\paren {f^+} } = 0$.
And it follows that:
$M_i^{\paren {f^+} } - m_i^{\paren {f^+} } = 0 \le M_i^{\paren f} - m_i^{\paren f}$

Then, in every case:

$M_i^{\paren {f^+} } - m_i^{\paren {f^+} } \le M_i^{\paren f} - m_i^{\paren f}$
But:














\(\ds \map {U_{f^+} } P - \map {L_{f^+} } P\)

\(=\)







\(\ds \sum_i M_i^{\paren {f^+} } \paren {x_i - x_{i - 1} } - \sum_i m_i^{\paren {f^+} } \paren {x_i - x_{i - 1} }\)





Definition of Upper Darboux Sum and Definition of Lower Darboux Sum














\(\ds \)

\(=\)







\(\ds \sum_i \paren {M_i^{\paren {f^+} } - m_i^{\paren {f^+} } } \paren {x_i - x_{i - 1} }\)




















\(\ds \)

\(\le\)







\(\ds \sum_i \paren {M_i^{\paren f } - m_i^{\paren f } } \paren {x_i - x_{i - 1} }\)





Inequality holds termwise














\(\ds \)

\(=\)







\(\ds \map {U_f} P - \map {L_f} P\)





Definition of Upper Darboux Sum and Definition of Lower Darboux Sum














\(\ds \)

\(<\)







\(\ds \epsilon\)










Because $\epsilon$ was arbitrary, it follows from Condition for Darboux Integrability that $f^+$ is integrable on $\closedint a b$
$\blacksquare$





