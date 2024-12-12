# 

Source: https://proofwiki.org/wiki/Gamma_Function_of_Negative_Half-Integer



Theorem













\(\ds \map \Gamma {-m + \frac 1 2}\)

\(=\)







\(\ds \frac {\paren {-1}^m 2^{2 m} m!} {\paren {2 m}!} \sqrt \pi\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^m 2^m} {1 \times 3 \times 5 \times \cdots \times \paren {2 m - 1} } \sqrt \pi\)









where:

$-m + \dfrac 1 2$ is a half-integer such that $m > 0$
$\Gamma$ denotes the Gamma function.


Proof
Proof by induction:
For all $m \in \Z_{> 0}$, let $\map P m$ be the proposition:

$\map \Gamma {-m + \dfrac 1 2} = \dfrac {\paren {-1}^m 2^{2 m} m!} {\paren {2 m}!} \sqrt \pi$


Basis for the Induction
$\map P 1$ is the case:














\(\ds \map \Gamma {-1 + \frac 1 2}\)

\(=\)







\(\ds \frac {\map \Gamma {\frac 1 2} } {-1 + \frac 1 2}\)





Gamma Function for Non-Negative Integer Argument














\(\ds \)

\(=\)







\(\ds \frac {\sqrt \pi} {-\frac 1 2}\)





Gamma Function of One Half














\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^1 \times 4} 2 \sqrt \pi\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^1 2^{2 \times 1} 1!} {2!} \sqrt \pi\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^1 2^{2 m} m!} {\paren {2 m}!}  \sqrt \pi\)





where $m = 1$



and so $\map P 1$ holds.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\map \Gamma {-k + \dfrac 1 2} = \dfrac {\paren {-1}^k 2^{2 k} k!} {\paren {2 k}!} \sqrt \pi$

Then we need to show:

$\map \Gamma {-\paren {k + 1} + \dfrac 1 2} = \dfrac {\paren {-1}^{k + 1} 2^{2 \paren {k + 1} } \paren {k + 1}!} {\paren {2 \paren {k + 1} } !} \sqrt \pi$


Induction Step
This is our induction step:














\(\ds \map \Gamma {-\paren {k + 1} + \frac 1 2}\)

\(=\)







\(\ds \frac {\map \Gamma {k + \frac 1 2} } {\paren {-\paren {k + 1} + \frac 1 2} }\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \frac {\dfrac {\paren {-1}^k 2^{2 k} k!} {\paren {2 k}!} \sqrt \pi} {-k - \frac 1 2}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^k \paren {-2} \times 2^{2 k} k!} {\paren {2 k + 1} \paren {2 k} !} \sqrt \pi\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^{k + 1} 2 \paren {2 k + 2} 2^{2 k} k!} {\paren {2 k}! \paren {2 k + 1} \paren {2 k + 2} } \sqrt \pi\)





multiplying top and bottom by $2 k + 2$














\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^{k + 1} 2^{2 k + 1} \paren {2 \paren {k + 1} } k!} {\paren {2 k + 2}!} \sqrt \pi\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^{k + 1} 2^{2 \paren {k + 1} } \paren {k + 1}!} {\paren {2 \paren {k + 1} }!} \sqrt \pi\)





further simplification




So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Finally:














\(\ds \frac {2^{2 m} m!} {\paren {2 m}!}\)

\(=\)







\(\ds \frac {2^{2 m} \ 1 \times 2 \times 3 \times \cdots \times m} {1 \times 2 \times 3 \times \cdots \times 2 m}\)




















\(\ds \)

\(=\)







\(\ds \frac {2^m \, 2^m \, \paren {1 \times 2 \times 3 \times \cdots \times m} } {1 \times 2 \times 3 \times \cdots \times \paren {2 m - 1} \times 2 m}\)




















\(\ds \)

\(=\)







\(\ds \frac {2^m \paren {\paren {2 \times 1} \times \paren {2 \times 2} \times \paren {2 \times 3} \times \cdots \times 2 m} } {1 \times 2 \times 3 \times \cdots \times \paren {2 m - 1} \times 2 m}\)




















\(\ds \)

\(=\)







\(\ds \frac {2^m \paren {2 \times 4 \times 6 \times \cdots \times 2 m} } {1 \times 2 \times 3 \times \cdots \times \paren {2 m - 1} \times 2 m}\)




















\(\ds \)

\(=\)







\(\ds \frac {2^m} {1 \times 3 \times 5 \times \cdots \times \paren {2 m - 1} }\)










Therefore:










\(\ds \forall m \in \Z_{>0}: \, \)



\(\ds \map \Gamma {-m + \frac 1 2}\)

\(=\)







\(\ds \frac {\paren {-1}^m 2^{2 m} m!} {\paren {2 m} !} \sqrt \pi\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^m 2^m} {1 \times 3 \times 5 \times \cdots \times \paren {2 m - 1} } \sqrt \pi\)









$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: The Gamma Function: $33$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $16.7$: Special Values for the Gamma Function




