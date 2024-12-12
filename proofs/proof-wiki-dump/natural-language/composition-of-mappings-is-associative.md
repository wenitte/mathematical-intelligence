# 

Source: https://proofwiki.org/wiki/Composition_of_Mappings_is_Associative

Theorem
The composition of mappings is an associative binary operation:

$\paren {f_3 \circ f_2} \circ f_1 = f_3 \circ \paren {f_2 \circ f_1}$
where $f_1, f_2, f_3$ are arbitrary mappings which fulfil the conditions for the relevant compositions to be defined.


Proof
$\quad\quad \begin{xy}\xymatrix@L + 2mu@ + 1em {
E \ar[ddd]^*{f} \ar[rrr]^*{g \circ f} \ar@{..>}[drdrdr]_*{h \circ g \circ f} & & & G \ar[ddd]^*{h} \\ \\ \\
F \ar[rrr]^*{h \circ g} \ar[rururu]_*{g} & & & H
}\end{xy}$


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Placement of texts to labels needs to be adjustedYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
From the definition, we know that a mapping is a relation.
First, note that from the definition of composition of relations, the following must be the case before the above expression is even to be defined:

$(1): \quad \Dom {f_2} = \Cdm {f_1}$
$(2): \quad \Dom {f_3} = \Cdm {f_2}$
where $\Cdm f$ denotes the codomain of the mapping $f$.

The two composite relations can be seen to have the same domain, as follows:














\(\ds \Dom {\paren {f_3 \circ f_2} \circ f_1}\)

\(=\)







\(\ds \Dom {f_1}\)





Domain of Composite Relation


















\(\ds \Dom {f_3 \circ \paren {f_2 \circ f_1} }\)

\(=\)







\(\ds \Dom {f_2 \circ f_1}\)





Domain of Composite Relation














\(\ds \)

\(=\)







\(\ds \Dom {f_1}\)





Domain of Composite Relation




Also they have the same codomain, as is seen by:














\(\ds \Cdm {\paren {f_3 \circ f_2} \circ f_1}\)

\(=\)







\(\ds \Cdm {f_3 \circ f_2}\)





Codomain of Composite Relation














\(\ds \)

\(=\)







\(\ds \Cdm {f_3}\)





Codomain of Composite Relation


















\(\ds \Cdm {f_3 \circ \paren {f_2 \circ f_1} }\)

\(=\)







\(\ds \Cdm {f_3}\)





Codomain of Composite Relation




As a mapping is a relation, we can use that the Composition of Relations is Associative‎:

$\forall x \in \Dom {f_1}: \map {\paren {f_3 \circ f_2} \circ f_1} x = \map {f_3 \circ \paren {f_2 \circ f_1} } x$
Hence the result.
$\blacksquare$


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Chapter $\text{I}$: Semi-Groups and Groups: $1$: Definition and examples of semigroups
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 10$: Inverses and Composites
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): Exercise $1.4: \ 5$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 3.4$. Product of mappings
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 4.2$. Commutative and associative operations: Example $65$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions: Theorem $5.1$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 0.5$: Theorem $7$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Composition of Functions: Theorem $6$
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): Appendix: Elementary set and number theory
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Mappings: $\S 16$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.14$: Composition of Functions: Theorem $14.4$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Theorem $5.2$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 8$: Composition of Functions and Diagrams
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $0$: Some Conventions and some Basic Facts
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 24.1$: Composition of Mappings
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.3$: Mappings
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $2$: Maps and relations on sets: Proposition $2.10$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): Appendix $\text{A}.4$: Composition and Restriction
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): associative
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): associative
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 1.2$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): composition




