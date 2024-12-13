# 

Source: https://proofwiki.org/wiki/L%27H%C3%B4pital%27s_Rule/Corollary_1



Corollary to L'Hôpital's Rule
Let $f$ and $g$ be real functions which are differentiable on the open interval $\openint a b$.
Suppose that $\forall x \in \openint a b: \map {g'} x \ne 0$.
Suppose that $\exists c \in \openint a b: \map f c = \map g c = 0$.

Then:

$\ds \lim_{x \mathop \to c} \frac {\map f x} {\map g x} = \lim_{x \mathop \to c} \frac {\map {f'} x} {\map {g'} x}$
provided that the second limit exists.


Proof
This follows directly from the definition of limit.
If $\ds \lim_{x \mathop \to c} \frac {\map {f'} x} {\map {g'} x}$ exists, it follows that:

$\ds \lim_{x \mathop \to c} \frac {\map {f'} x} {\map {g'} x} = \lim_{x \mathop \to c^+} \frac {\map {f'} x} {\map {g'} x}$
That is, if there exists such a limit, it is also a limit from the right.
$\blacksquare$


Also defined as
In many elementary texts on real analysis, it appears to be commonplace for $f$ and $g$ to be specified as being continuous on $\closedint a b$.
However, this is not strictly necessary, as differentiability on $\openint a b$ is completely adequate.
If is of course noted that from Differentiable Function is Continuous, if $f$ and $g$ are differentiable on $\openint a b$, they are also continuous on $\openint a b$, just not necessarily also at $a$ or $b$.
Indeed, for L'Hôpital's Rule: Corollary $2$, $f$ and $g$ are demonstrably not continuous either at $a$ or $b$, or possibly both.


Source of Name
This entry was named for Guillaume de l'Hôpital.


Historical Note
While attributed to Guillaume de l'Hôpital, who included it in his $1696$ work L'Analyse des Infiniment Petits, published anonymously, this result was in fact discovered by Johann Bernoulli in $1694$.
After L'Hôpital's death, Bernoulli claimed that most of the content of L'Analyse des Infiniment Petits, including L'Hôpital's Rule, was in fact his own work.
However, it was discovered in $1955$, on the publication of correspondence between L'Hôpital and Bernoulli that there had been an agreement between them to allow L'Hôpital to use Bernoulli's discoveries however he wanted.
Hence L'Hôpital was vindicated, and his name continues to be associated with this result.





