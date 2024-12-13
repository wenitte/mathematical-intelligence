# 

Source: https://proofwiki.org/wiki/Lagrange%27s_Trigonometric_Identities/Sine/Sine_Form



Theorem













\(\ds \sum_{k \mathop = 0}^n \sin k x\)

\(=\)







\(\ds \sin 0 + \sin x + \sin 2 x + \sin 3 x + \cdots + \sin n x\)




















\(\ds \)

\(=\)







\(\ds \frac {\sin \frac {\paren {n + 1} x} 2 \sin \frac {n x} 2} {\sin \frac x 2}\)









where $x$ is not an integer multiple of $2 \pi$.


Proof 1
By Werner Formula for Sine by Sine:

$2 \sin \alpha \sin \beta = \map \cos {\alpha - \beta} - \map \cos {\alpha + \beta}$
Thus we establish the following sequence of identities:














\(\ds 2 \sin 0 \sin \frac x 2\)

\(=\)







\(\ds 0\)




















\(\ds 2 \sin x \sin \frac x 2\)

\(=\)







\(\ds \cos \frac x 2 - \cos \frac {3 x} 2\)




















\(\ds 2 \sin 2 x \sin \frac x 2\)

\(=\)







\(\ds \cos \frac {3 x} 2 - \cos \frac {5 x} 2\)




















\(\ds \)

\(\cdots\)







\(\ds \)




















\(\ds 2 \sin n x \sin \frac x 2\)

\(=\)







\(\ds \cos \frac {\paren {2 n - 1} x} 2 - \cos \frac {\paren {2 n + 1} x} 2\)










Summing the above:














\(\ds 2 \sin \frac x 2 \paren {\sum_{k \mathop = 0}^n \sin k x}\)

\(=\)







\(\ds \cos \frac x 2 - \cos \frac {\paren {2 n + 1} x} 2\)





Sums on right hand side form Telescoping Series














\(\ds \)

\(=\)







\(\ds -2 \map \sin {\dfrac {\frac x 2 + \frac {\paren {2 n + 1} x} 2} 2} \map \sin {\dfrac {\frac x 2 - \frac {\paren {2 n + 1} x} 2} 2}\)





Cosine minus Cosine














\(\ds \)

\(=\)







\(\ds -2 \sin \dfrac {\paren {n + 1} x} 2 \sin \dfrac {-n x} 2\)




















\(\ds \)

\(=\)







\(\ds 2 \sin \dfrac {\paren {n + 1} x} 2 \sin \dfrac {n x} 2\)





Sine Function is Odd




The result follows by dividing both sides by $2 \sin \dfrac x 2$.

It is noted that when $x$ is a multiple of $2 \pi$ then:

$\sin \dfrac x 2 = 0$
leaving the right hand side undefined.


This needs considerable tedious hard slog to complete it.In particular: Explain what happens in that caseTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof 2
Let $x$ be a real number that is not a integer multiple of $2 \pi$.
Let $k$ be a non-negative integer.
We have, from Euler's Formula:

$\map \exp {i k x} = i \sin k x + \cos k x$
Summing from $k = 0$ to $k = n$, we have: 

$\ds \sum_{k \mathop = 0}^n \map \exp {i k x} = i \sum_{k \mathop = 0}^n \sin k x + \sum_{k \mathop = 0}^n \cos k x$
As $\sin k x$ and $\cos k x$ are both real for real $k, x$, we have: 














\(\ds \sum_{k \mathop = 0}^n \sin k x\)

\(=\)







\(\ds \map \Im {\sum_{k \mathop = 0}^n \map \exp {i k x} }\)




















\(\ds \)

\(=\)







\(\ds \map \Im {\paren {i \sin \frac {n x} 2 + \cos \frac {n x} 2} \frac {\map \sin {\frac {\paren {n + 1} x} 2} } {\sin \frac x 2} }\)





Sum of $\map \exp {i k x}$














\(\ds \)

\(=\)







\(\ds \frac {\sin \frac {\paren {n + 1} x} 2 \sin \frac {n x} 2} {\sin \frac x 2}\)









$\blacksquare$


Also see
Lagrange's Cosine Identity


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 19$: Miscellaneous Series: $19.40$




