# 

Source: https://proofwiki.org/wiki/Integral_Form_of_Gamma_Function_equivalent_to_Euler_Form/Proof_1



Theorem
The following definitions of the concept of Gamma Function are equivalent:

Integral Form
The gamma function $\Gamma: \C \setminus \Z_{\le 0} \to \C$ is defined, for the open right half-plane, as:

$\ds \map \Gamma z = \map {\MM \set {e^{-t} } } z = \int_0^{\to \infty} t^{z - 1} e^{-t} \rd t$
where $\MM$ is the Mellin transform.

For all other values of $z$ except the non-positive integers, $\map \Gamma z$ is defined as:

$\map \Gamma {z + 1} = z \map \Gamma z$
Euler Form
The Euler form of the gamma function is:

$\ds \map \Gamma z = \frac 1 z \prod_{n \mathop = 1}^\infty \paren {\paren {1 + \frac 1 n}^z \paren {1 + \frac z n}^{-1} } = \lim_{m \mathop \to \infty} \frac {m^z m!} {z \paren {z + 1} \paren {z + 2} \cdots \paren {z + m} }$
which is valid except for $z \in \set {0, -1, -2, \ldots}$.


Proof
It is taken for granted that the Gamma function increases monotonically on $\R_{\ge 1}$.


This article contains statements that are justified by handwavery.In particular: Replace the above with a link to a proofYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
We begin with an inequality that can easily be verified using cross multiplication.


This article contains statements that are justified by handwavery.In particular: ... so verify it.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let $x$ be a real number between $0$ and $1$.
Let $n$ is a positive integer.
Then:

$\ds \frac {\log \map \Gamma {n - 1} - \log \map \Gamma n} {\paren {n - 1} - n} \le \frac {\log \map \Gamma {x + n} - \log \map \Gamma n} {\paren {x + n} - n} \le \frac {\log \map \Gamma {n + 1} - \log \map \Gamma n} {\paren {n + 1} - n}$
Since n is a positive integer, we can make use of the identity:

$\map \Gamma n = \paren {n - 1}!$
Simplifying, we get:

$\map \log {n - 1} \le \dfrac {\log \map \Gamma {x + n} - \map \log {\paren {n - 1}!} } x \le \map \log n$
We now make use of the identity:

$\ds \map \Gamma {x + n} = \prod_{k \mathop = 1}^n \paren {x + n - k} \map \Gamma x$
along with the fact that the Gamma Function is Log-Convex, to simplify the inequality:

$\ds \paren {n - 1}^x \paren {n - 1}! \prod_{k \mathop = 1}^n \paren {x + n - k}^{-1} \le \map \Gamma x \le n^x \paren {n - 1}!\prod_{k \mathop = 1}^n \paren {x + n - k}^{-1}$
Taking the limit as $n$ goes to infinity and using the Squeeze Theorem:

$\ds \map \Gamma x = \lim_{n \mathop \to \infty} n^x n! \prod_{k \mathop = 0}^n \paren {x + n - k}^{-1}$
which is another representation of Euler's form.
This proves equivalence for $x$ between $0$ and $1$.
The result follows from the Gamma Difference Equation.
$\blacksquare$





