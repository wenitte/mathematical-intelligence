# 

Source: https://proofwiki.org/wiki/Equality_of_Mappings



Theorem
Two mappings $f_1: S_1 \to T_1, f_2: S_2 \to T_2$ are equal if and only if:

$(1): \quad S_1 = S_2$
$(2): \quad T_1 = T_2$
$(3): \quad \forall x \in S_1: \map {f_1} x = \map {f_2} x$


Proof
This follows directly from Equality of Relations.
$\blacksquare$


Also defined as
It is worth labouring the point that for two mappings to be equal, not only must their domains be equal, but so must their codomains:

It may seem like nit-picking to distinguish between functions which have different [ codomains but are otherwise equal] (and indeed until recently most authors did not) but failure to make the distinction sometimes leads to confusion.
-- 1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability
At first sight this may appear somewhat pedantic but we shall see later that not to do so can lead to confusion.
-- 1975: T.S. Blyth: Set Theory and Abstract Algebra
This is a matter of convention. Some authors would say that $\theta$, $\phi$ are equal if $(1)$ [equality of domains] and $(3)$ [equality of images] hold, but this gives a little difficulty when defining the inverse mapping.
-- 1965: J.A. Green: Sets and Groups: $\S 3.2$. Equality of mappings (footnote)

Thus it is worth noting that this is a modern departure, and many earlier sources, for example W.E. Deskins: Abstract Algebra, do not impose this condition, stating merely that two mappings are equal if the domains are equal and every element of the domain has the same image under each mapping.

Other sources, for example Ian D. Macdonald: The Theory of Groups and Iain T. Adamson: Introduction to Field Theory, gloss over the topic, and merely assume equality of domains and codomains, implicitly stating the equality of the images.
John F. Humphreys: A Course in Group Theory, while careful to state equality of codomains, implicitly assumes that two mappings in question have the same domain to start with, and so misses a chance to explain the equality of the domains:

... It also follows that two maps $f: X \to Y$ and $g: X \to Z$ can only be equal if $Y = Z$.

Earlier works, for example Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts and John L. Kelley: General Topology tend to identify a mapping with its graph, preferring to dispense with a need to specify either its domain or its codomain.


Examples
Rotation of Plane $360 \degrees$ equals Identity Mapping
Let $\Gamma$ denote the Cartesian plane.
Let $R_{360}: \Gamma \to \Gamma$ denote the rotation of $\Gamma$ about the origin anticlockwise through $360 \degrees$.
Let $I_\Gamma: \Gamma \to \Gamma$ denote the identity mapping on $\Gamma$.

Then:

$R_{360} = I_\Gamma$


Rotation of Plane $180 \degrees$ Clockwise and Anticlockwise
Let $\Gamma$ denote the Cartesian plane.
Let $R_{180}: \Gamma \to \Gamma$ denote the rotation of $\Gamma$ about the origin anticlockwise through $180 \degrees$.
Let $R_{-180}: \Gamma \to \Gamma$ denote the rotation of $\Gamma$ about the origin clockwise through $180 \degrees$.

Then:

$R_{180} = R_{-180}$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 3.2$. Equality of mappings
1972: A.G. Howson: A Handbook of Terms used in Algebra and Analysis ... (previous) ... (next): $\S 2$: Sets and functions: Graphs and functions
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 4$. Relations; functional relations; mappings
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 20$: Introduction: Remarks $\text {(j)}$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): Appendix $\text{A}.3$: Functions




