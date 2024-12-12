# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Real_Exponential_Function/Limit_of_Sequence_implies_Extension_of_Rational_Exponential



Theorem
The following definition of the concept of the real exponential function:

As the Limit of a Sequence
The exponential function can be defined as the following limit of a sequence:

$\exp x := \ds \lim_{n \mathop \to +\infty} \paren {1 + \frac x n}^n$

implies the following definition:

As an Extension of the Rational Exponential
Let $e$ denote Euler's number.
Let $f: \Q \to \R$ denote the real-valued function defined as:

$\map f x = e^x$
That is, let $\map f x$ denote $e$ to the power of $x$, for rational $x$.

Then $\exp : \R \to \R$ is defined to be the unique continuous extension of $f$ to $\R$.
$\map \exp x$ is called the exponential of $x$.


Proof
Let the restriction of the exponential function to the rationals be defined as:

$\ds \exp \restriction_\Q: x \mapsto \lim_{n \mathop \to +\infty} \paren {1 + \frac x n}^n$

Thus, let $e$ be Euler's Number defined as:

$e = \ds \lim_{n \mathop \to +\infty} \paren {1 + \frac 1 n}^n$

For $x = 0$:














\(\ds \exp \restriction_\Q \paren 0\)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {1 + \frac 0 n}^n\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds e^0\)









For $x \ne 0$:














\(\ds \map {\exp \restriction_\Q} x\)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {1 + \frac x n}^n\)




















\(\ds \)

\(=\)







\(\ds \lim_{\paren {n / x} \mathop \to +\infty} \paren {\paren {1 + \frac 1 {\paren {n / x} } }^{\paren {n / x} } }^x\)





Exponent Combination Laws














\(\ds \)

\(=\)







\(\ds e^x\)









where the continuity in the last step follows a fortiori from Power Function to Rational Power permits Unique Continuous Extension.

For $x \in \R \setminus \Q$, we invoke Power Function to Rational Power permits Unique Continuous Extension.
$\blacksquare$


This article contains statements that are justified by handwavery.In particular: We are referring to continuity of a real function when actually we are talking about a function on $\Q$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.): $\S 5.5$




