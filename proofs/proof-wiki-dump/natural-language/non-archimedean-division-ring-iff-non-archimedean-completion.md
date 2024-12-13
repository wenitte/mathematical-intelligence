# 

Source: https://proofwiki.org/wiki/Non-Archimedean_Division_Ring_iff_Non-Archimedean_Completion



Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.
Let $\struct {R', \norm {\, \cdot \,}' }$ be a normed division ring completion of $\struct {R, \norm {\, \cdot \,} }$
Then:

$\norm {\, \cdot \,}$ is non-archimedean if and only if $\norm {\, \cdot \,}'$ is non-archimedean.


Proof
By the definition of a normed division ring completion then:

$(1): \quad$ there exists a distance-preserving ring monomorphism $\phi: R \to R'$.
$(2): \quad \struct {R', \norm {\, \cdot \,}' }$ is a complete metric space.
$(3): \quad \phi \sqbrk R$ is a dense subspace in $\struct {R', \norm {\, \cdot \,}' }$.
By Normed Division Ring is Dense Subring of Completion, $\phi \sqbrk R$ is a dense normed division subring of $R'$ and $\phi: R \to \map \phi R$ is an isometric isomorphism.
By Isometrically Isomorphic Non-Archimedean Division Rings, $\struct {R, \norm {\, \cdot \,} }$ is non-archimedean if and only if $\struct {\phi \sqbrk R, \norm {\, \cdot \,}' }$ is.
So it remains to show that $\struct {\phi \sqbrk R, \norm {\, \cdot \,}' }$ non-archimedean if and only if $\struct {R', \norm {\, \cdot \,}' }$ is.


Necessary Condition
Let $\struct {\phi \sqbrk R, \norm {\, \cdot \,}' }$ be non-archimedean.
Let $x', y' \in R'$.
By the definition of a dense subset:

$\map \cl {\phi \sqbrk R} = R'$
By Closure of Subset of Metric Space by Convergent Sequence then:

there exists a sequence $\sequence {x_n'} \subseteq \phi \sqbrk R$ that converges to $x'$, that is, $\ds \lim_{n \mathop \to \infty} x_n' = x'$
there exists a sequence $\sequence {y_n'} \subseteq \phi \sqbrk R$ that converges to $y'$, that is, $\ds \lim_{n \mathop \to \infty} y_n' = y'$
By Sum Rule for Sequences in Normed Division Ring then:

$\ds \lim_{n \mathop \to \infty} x_n' + y_n' = x' + y'$
By modulus of limit then:

$\ds \lim_{n \mathop \to \infty} \norm {x_n'}' = \norm {x'}'$
$\ds \lim_{n \mathop \to \infty} \norm {y_n'}' = \norm {y'}'$
$\ds \lim_{n \mathop \to \infty} \norm {x_n' + y_n'}' = \norm {x' + y'}'$
By Maximum Rule for Real Sequences then:

$\ds \lim_{n \mathop \to \infty} \max \set {\norm {x_n'}', \norm {y_n'}' } = \max \set {\norm {x'}', \norm {y'}'}$
Since $\struct {\phi \sqbrk R, \norm {\, \cdot \,}' }$ is non-archimedean then:

$\forall n: \norm {x_n' + y_n'}' \le \max \set {\norm {x_n'}', \norm {y_n'}' }$
By Inequality Rule for Real Sequences then:

$\ds \norm {x' + y'}' = \lim_{n \mathop \to \infty} \norm {x_n' + y_n'}' \le \lim_{n \mathop \to \infty} \max \set {\norm {x_n'}', \norm {y_n'}' } = \max \set {\norm {x'}', \norm {y'}'}$
The result follows.
$\Box$


Sufficient Condition
Let $\struct {R', \norm {\, \cdot \,}' }$ be non-archimedean.
By Subring of Non-Archimedean Division Ring then $\struct {\phi \sqbrk R, \norm {\, \cdot \,}' }$ is non-archimedean.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.2$: Completions




