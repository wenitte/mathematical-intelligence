# 

Source: https://proofwiki.org/wiki/Characteristic_Function_of_Random_Variable_is_Well-Defined

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ be a real-valued random variable on $\struct {\Omega, \Sigma, \Pr}$.

The characteristic function $\phi: \R \to \C$ of $X$ is well-defined.


Proof
Let $t \in \R$.

Recall:














\(\ds \map \phi t\)

\(=\)







\(\ds \expect {e^{i t X} }\)





Definition of Characteristic Function














\(\ds \)

\(=\)







\(\ds \int e^{i t X} \rd \Pr\)





Definition of Expectation



Thus we need to show that the last integral exists.

By Modulus of Exponential of Imaginary Number is One:

$\cmod {e^{i t X } } = 1$
since $t \map X \omega \in \R$ for all $\omega \in \Omega$.
In particular:

$\ds \int \cmod {e^{i t X} } \rd \Pr = \int 1 \rd \Pr = 1$

This article, or a section of it, needs explaining.In particular: No seriously, I mean that, a link to the definition of $\d \Pr$ which is understandable in the context of the general measure $\mu$, which in itself is not a trivial concept to grab, so at least thrown a bone to the poor reader of the page, yeah?I gave it above as Definition of Expectation. Or feel free to rename $\Pr$ to $\mu$, if it is somehow helpful.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus, in view of Characterization of Integrable Functions:

$\ds \int e^{i t X} \rd \Pr$
exists.
$\blacksquare$





