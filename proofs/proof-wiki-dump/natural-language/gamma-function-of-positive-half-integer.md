# 

Source: https://proofwiki.org/wiki/Gamma_Function_of_Positive_Half-Integer



Theorem













\(\ds \map \Gamma {m + \frac 1 2}\)

\(=\)







\(\ds \frac {\paren {2 m}!} {2^{2 m} m!} \sqrt \pi\)




















\(\ds \)

\(=\)







\(\ds \frac {1 \times 3 \times 5 \times \cdots \times \paren {2 m - 1} } {2^m} \sqrt \pi\)









where:

$m + \dfrac 1 2$ is a half-integer such that $m > 0$
$\Gamma$ denotes the Gamma function.


Proof
Proof by induction:
For all $m \in \Z_{> 0}$, let $\map P m$ be the proposition:

$\map \Gamma {m + \dfrac 1 2} = \dfrac {\paren {2 m}!} {2^{2 m} m!} \sqrt \pi$


Basis for the Induction
$\map P 1$ is the case:














\(\ds \map \Gamma {1 + \frac 1 2}\)

\(=\)







\(\ds \frac 1 2 \map \Gamma {\frac 1 2}\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \frac {\sqrt \pi} 2\)





Gamma Function of One Half














\(\ds \)

\(=\)







\(\ds \frac 2 4 \sqrt \pi\)




















\(\ds \)

\(=\)







\(\ds \frac {2!} {2^{2 \times 1} 1!} \sqrt \pi\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 m}!} {2^{2 m} m!} \sqrt \pi\)





where $m = 1$



and so $\map P 1$ holds.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\map \Gamma {k + \dfrac 1 2} = \dfrac {\paren {2 k}!} {2^{2 k} k!} \sqrt \pi$

Then we need to show:

$\map \Gamma {k + 1 + \dfrac 1 2} = \dfrac {\paren {2 \paren {k + 1} }!} {2^{2 \paren {k + 1} } \paren {k + 1}!} \sqrt \pi$


Induction Step
This is our induction step:














\(\ds \map \Gamma {k + 1 + \frac 1 2}\)

\(=\)







\(\ds \paren {k + \frac 1 2} \map \Gamma {k + \frac 1 2}\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \paren {k + \frac 1 2} \dfrac {\paren {2 k}!} {2^{2 k} k!} \sqrt \pi\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 k + 1} \paren {2 k}!} {2 \times 2^{2 k} k!} \sqrt \pi\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 k}! \paren {2 k + 1} \paren {2 k + 2} } {2 \paren {2 k + 2} 2^{2 k} k!} \sqrt \pi\)





multiplying top and bottom by $2 k + 2$














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 k + 2}!} {2^{2 k + 1} \paren {2 \paren {k + 1} } k!} \sqrt \pi\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {2 \paren {k + 1} }!} {2^{2 \paren {k + 1} } \paren {k + 1}!} \sqrt \pi\)










So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Finally:














\(\ds \frac {\paren {2 m}!} {2^{2 m} m!}\)

\(=\)







\(\ds \frac {1 \times 2 \times 3 \times \cdots \times 2 m} {2^{2 m} \ 1 \times 2 \times 3 \times \cdots \times m}\)




















\(\ds \)

\(=\)







\(\ds \frac {1 \times 2 \times 3 \times \cdots \times \paren {2 m - 1} \times 2 m} {2^m \ 2^m \ \paren {1 \times 2 \times 3 \times \cdots \times m} }\)




















\(\ds \)

\(=\)







\(\ds \frac {1 \times 2 \times 3 \times \cdots \times \paren {2 m - 1} \times 2 m} {2^m \paren {\paren {2 \times 1} \times \paren {2 \times 2} \times \paren {2 \times 3} \times \cdots \times 2 m} }\)




















\(\ds \)

\(=\)







\(\ds \frac {1 \times 2 \times 3 \times \cdots \times \paren {2 m - 1} \times 2 m} {2^m \paren {2 \times 4 \times 6 \times \cdots \times 2 m} }\)




















\(\ds \)

\(=\)







\(\ds \frac {1 \times 3 \times 5 \times \cdots \times \paren {2 m - 1} } {2^m}\)










Therefore:










\(\ds \forall m \in \Z_{>0}: \, \)



\(\ds \map \Gamma {m + \frac 1 2}\)

\(=\)







\(\ds \frac {\paren {2 m}!} {2^{2 m} m!} \sqrt \pi\)




















\(\ds \)

\(=\)







\(\ds \frac {1 \times 3 \times 5 \times \cdots \times \paren {2 m - 1} } {2^m} \sqrt \pi\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $16.6$: Special Values for the Gamma Function
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): gamma function
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): gamma function




