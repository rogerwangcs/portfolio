import React, {Component} from 'react';

import 'jupyter.css'
import 'jupyter-theme.css'

const Jupyter = () => {
  return (
    <div style={{fontFamily: 'Verdana'}}>
      <div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[173]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="kn">import</span> <span className="nn">numpy</span> <span className="k">as</span> <span className="nn">np</span>{"\n"}<span className="kn">import</span> <span className="nn">pandas</span> <span className="k">as</span> <span className="nn">pd</span>{"\n"}<span className="kn">import</span> <span className="nn">matplotlib.pyplot</span> <span className="k">as</span> <span className="nn">plt</span>{"\n"}<span className="kn">import</span> <span className="nn">seaborn</span> <span className="k">as</span> <span className="nn">sns</span>{"\n"}<span className="kn">import</span> <span className="nn">plotly</span>{"\n"}<span className="kn">import</span> <span className="nn">difflib</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[267]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="o">%</span><span className="k">matplotlib</span> inline{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[28]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="n">rankings</span> <span className="o">=</span> <span className="n">pd</span><span className="o">.</span><span className="n">read_csv</span><span className="p">(</span><span className="s1">'Rankings.csv'</span><span className="p">,</span> <span className="n">encoding</span><span className="o">=</span> <span className="s1">'latin-1'</span><span className="p">)</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[29]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="c1">#convert tuition costs to integers</span>{"\n"}<span className="n">rankings</span><span className="p">[</span><span className="s1">'Tuition and fees'</span><span className="p">]</span> <span className="o">=</span> <span className="n">rankings</span><span className="p">[</span><span className="s1">'Tuition and fees'</span><span className="p">]</span><span className="o">.</span><span className="n">apply</span><span className="p">(</span><span className="k">lambda</span> <span className="n">x</span><span className="p">:</span> <span className="nb">int</span><span className="p">(</span><span className="n">x</span><span className="o">.</span><span className="n">replace</span><span className="p">(</span><span className="s1">'$'</span><span className="p">,</span><span className="s1">''</span><span className="p">)</span><span className="o">.</span><span className="n">replace</span><span className="p">(</span><span className="s1">','</span><span className="p">,</span><span className="s1">''</span><span className="p">)))</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[255]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="n">rankings</span><span className="o">.</span><span className="n">head</span><span className="p">()</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
          <div className="output_wrapper">
            <div className="output">
              <div className="output_area">
                <div className="prompt output_prompt">Out[255]:</div>
                <div className="output_html rendered_html output_subarea output_execute_result">
                  <div>
                    <style
                      scoped
                      dangerouslySetInnerHTML={{
                      __html: "\n .dataframe tbody tr th:only-of-type {\n vertical-align: middle;\n }\n\n .dataframe tbody tr th {\n vertical-align: top;\n }\n\n .dataframe thead th {\n text-align: right;\n }\n"
                    }}/>
                    <table border={1} className="dataframe">
                      <thead>
                        <tr
                          style={{
                          textAlign: 'right'
                        }}>
                          <th/>
                          <th>Name</th>
                          <th>Location</th>
                          <th>Rank</th>
                          <th>Description</th>
                          <th>Tuition and fees</th>
                          <th>In-state</th>
                          <th>Undergrad Enrollment</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>0</th>
                          <td>Princeton University</td>
                          <td>Princeton, NJ</td>
                          <td>1</td>
                          <td>Princeton, the fourth-oldest college in the Un...</td>
                          <td>45320</td>
                          <td>NaN</td>
                          <td>5,402</td>
                        </tr>
                        <tr>
                          <th>1</th>
                          <td>Harvard University</td>
                          <td>Cambridge, MA</td>
                          <td>2</td>
                          <td>Harvard is located in Cambridge, Massachusetts...</td>
                          <td>47074</td>
                          <td>NaN</td>
                          <td>6,699</td>
                        </tr>
                        <tr>
                          <th>2</th>
                          <td>University of Chicago</td>
                          <td>Chicago, IL</td>
                          <td>3</td>
                          <td>The University of Chicago, situated in Chicago...</td>
                          <td>52491</td>
                          <td>NaN</td>
                          <td>5,844</td>
                        </tr>
                        <tr>
                          <th>3</th>
                          <td>Yale University</td>
                          <td>New Haven, CT</td>
                          <td>3</td>
                          <td>Yale University, located in New Haven, Connect...</td>
                          <td>49480</td>
                          <td>NaN</td>
                          <td>5,532</td>
                        </tr>
                        <tr>
                          <th>4</th>
                          <td>Columbia University</td>
                          <td>New York, NY</td>
                          <td>5</td>
                          <td>Columbia University, located in Manhattan's Mo...</td>
                          <td>55056</td>
                          <td>NaN</td>
                          <td>6,102</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[7]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="n">rankings</span><span className="o">.</span><span className="n">describe</span><span className="p">()</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
          <div className="output_wrapper">
            <div className="output">
              <div className="output_area">
                <div className="prompt output_prompt">Out[7]:</div>
                <div className="output_html rendered_html output_subarea output_execute_result">
                  <div>
                    <style
                      scoped
                      dangerouslySetInnerHTML={{
                      __html: "\n .dataframe tbody tr th:only-of-type {\n vertical-align: middle;\n }\n\n .dataframe tbody tr th {\n vertical-align: top;\n }\n\n .dataframe thead th {\n text-align: right;\n }\n"
                    }}/>
                    <table border={1} className="dataframe">
                      <thead>
                        <tr
                          style={{
                          textAlign: 'right'
                        }}>
                          <th/>
                          <th>Rank</th>
                          <th>Tuition and fees</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>count</th>
                          <td>231.000000</td>
                          <td>231.000000</td>
                        </tr>
                        <tr>
                          <th>mean</th>
                          <td>113.982684</td>
                          <td>33769.246753</td>
                        </tr>
                        <tr>
                          <th>std</th>
                          <td>65.995518</td>
                          <td>10756.733516</td>
                        </tr>
                        <tr>
                          <th>min</th>
                          <td>1.000000</td>
                          <td>5300.000000</td>
                        </tr>
                        <tr>
                          <th>25%</th>
                          <td>56.000000</td>
                          <td>25693.000000</td>
                        </tr>
                        <tr>
                          <th>50%</th>
                          <td>111.000000</td>
                          <td>31608.000000</td>
                        </tr>
                        <tr>
                          <th>75%</th>
                          <td>171.000000</td>
                          <td>42721.000000</td>
                        </tr>
                        <tr>
                          <th>max</th>
                          <td>220.000000</td>
                          <td>55056.000000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[264]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">rankings</span><span className="p">[</span><span className="s1">'Tuition and fees'</span><span className="p">],</span><span className="n">rankings</span><span className="p">[</span><span className="s1">'Rank'</span><span className="p">])</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
          <div className="output_wrapper">
            <div className="output">
              <div className="output_area">
                <div className="prompt output_prompt">Out[264]:</div>
                <div className="output_text output_subarea output_execute_result">
                  <pre>&lt;matplotlib.collections.PathCollection at 0x1f0be3dfe10&gt;</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[189]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="n">salaries</span> <span className="o">=</span> <span className="n">pd</span><span className="o">.</span><span className="n">read_csv</span><span className="p">(</span><span className="s1">'Salaries.csv'</span><span className="p">,</span> <span className="n">encoding</span><span className="o">=</span> <span className="s1">'utf-8'</span><span className="p">)</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[11]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="n">salaries</span><span className="o">.</span><span className="n">head</span><span className="p">()</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
          <div className="output_wrapper">
            <div className="output">
              <div className="output_area">
                <div className="prompt output_prompt">Out[11]:</div>
                <div className="output_html rendered_html output_subarea output_execute_result">
                  <div>
                    <style
                      scoped
                      dangerouslySetInnerHTML={{
                      __html: "\n .dataframe tbody tr th:only-of-type {\n vertical-align: middle;\n }\n\n .dataframe tbody tr th {\n vertical-align: top;\n }\n\n .dataframe thead th {\n text-align: right;\n }\n"
                    }}/>
                    <table border={1} className="dataframe">
                      <thead>
                        <tr
                          style={{
                          textAlign: 'right'
                        }}>
                          <th/>
                          <th>School Name</th>
                          <th>Region</th>
                          <th>Starting Median Salary</th>
                          <th>Mid-Career Median Salary</th>
                          <th>Mid-Career 10th Percentile Salary</th>
                          <th>Mid-Career 25th Percentile Salary</th>
                          <th>Mid-Career 75th Percentile Salary</th>
                          <th>Mid-Career 90th Percentile Salary</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>0</th>
                          <td>Stanford University</td>
                          <td>California</td>
                          <td>70400</td>
                          <td>129000</td>
                          <td>68400.0</td>
                          <td>93100</td>
                          <td>184000</td>
                          <td>257000.0</td>
                        </tr>
                        <tr>
                          <th>1</th>
                          <td>California Institute of Technology (CIT)</td>
                          <td>California</td>
                          <td>75500</td>
                          <td>123000</td>
                          <td>NaN</td>
                          <td>104000</td>
                          <td>161000</td>
                          <td>NaN</td>
                        </tr>
                        <tr>
                          <th>2</th>
                          <td>Harvey Mudd College</td>
                          <td>California</td>
                          <td>71800</td>
                          <td>122000</td>
                          <td>NaN</td>
                          <td>96000</td>
                          <td>180000</td>
                          <td>NaN</td>
                        </tr>
                        <tr>
                          <th>3</th>
                          <td>University of California, Berkeley</td>
                          <td>California</td>
                          <td>59900</td>
                          <td>112000</td>
                          <td>59500.0</td>
                          <td>81000</td>
                          <td>149000</td>
                          <td>201000.0</td>
                        </tr>
                        <tr>
                          <th>4</th>
                          <td>Occidental College</td>
                          <td>California</td>
                          <td>51900</td>
                          <td>105000</td>
                          <td>NaN</td>
                          <td>54800</td>
                          <td>157000</td>
                          <td>NaN</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[141]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="n">bc</span> <span className="o">=</span> <span className="n">salaries</span><span className="p">[</span><span className="n">salaries</span><span className="p">[</span><span className="s1">'School Name'</span><span className="p">]</span> <span className="o">==</span> <span className="s1">'Boston College'</span><span className="p">]</span>{"\n"}<span className="n">bc</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
          <div className="output_wrapper">
            <div className="output">
              <div className="output_area">
                <div className="prompt output_prompt">Out[141]:</div>
                <div className="output_html rendered_html output_subarea output_execute_result">
                  <div>
                    <style
                      scoped
                      dangerouslySetInnerHTML={{
                      __html: "\n .dataframe tbody tr th:only-of-type {\n vertical-align: middle;\n }\n\n .dataframe tbody tr th {\n vertical-align: top;\n }\n\n .dataframe thead th {\n text-align: right;\n }\n"
                    }}/>
                    <table border={1} className="dataframe">
                      <thead>
                        <tr
                          style={{
                          textAlign: 'right'
                        }}>
                          <th/>
                          <th>School Name</th>
                          <th>Region</th>
                          <th>Starting Median Salary</th>
                          <th>Mid-Career Median Salary</th>
                          <th>Mid-Career 10th Percentile Salary</th>
                          <th>Mid-Career 25th Percentile Salary</th>
                          <th>Mid-Career 75th Percentile Salary</th>
                          <th>Mid-Career 90th Percentile Salary</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[258]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="n">plt</span><span className="o">.</span><span className="n">axvline</span><span className="p">(</span><span className="n">salaries</span><span className="p">[</span><span className="s1">'Starting Median Salary'</span><span className="p">]</span><span className="o">.</span><span className="n">median</span><span className="p">(),</span> <span className="n">color</span><span className="o">=</span><span className="s1">'r'</span><span className="p">,</span> <span className="n">linestyle</span><span className="o">=</span><span className="s1">'dashed'</span><span className="p">,</span> <span className="n">linewidth</span><span className="o">=</span><span className="mi">2</span><span className="p">)</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">axvline</span><span className="p">(</span><span className="n">bc</span><span className="p">[</span><span className="s1">'Starting Median Salary'</span><span className="p">]</span><span className="o">.</span><span className="n">iloc</span><span className="p">[</span><span className="mi">0</span><span className="p">],</span> <span className="n">color</span><span className="o">=</span><span className="s1">'b'</span><span className="p">,</span> <span className="n">linestyle</span><span className="o">=</span><span className="s1">'dashed'</span><span className="p">,</span> <span className="n">linewidth</span><span className="o">=</span><span className="mi">2</span><span className="p">)</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">hist</span><span className="p">(</span><span className="n">salaries</span><span className="p">[</span><span className="s1">'Starting Median Salary'</span><span className="p">],</span><span className="n">bins</span><span className="o">=</span><span className="mi">20</span><span className="p">)</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
          <div className="output_wrapper">
            <div className="output">
              <div className="output_area">
                <div className="prompt output_prompt">Out[258]:</div>
                <div className="output_text output_subarea output_execute_result">
                  <pre>(array([{"  "}7.,{"  "}15.,{"  "}25.,{"  "}56.,{"  "}48.,{"  "}51.,{"  "}37.,{"  "}20.,{"  "}17.,{"  "}12.,{"   "}7.,{"\n"}{"          "}6.,{"   "}9.,{"   "}3.,{"   "}2.,{"   "}1.,{"   "}0.,{"   "}1.,{"   "}2.,{"   "}1.]),{"\n"} array([ 34500.,{"  "}36550.,{"  "}38600.,{"  "}40650.,{"  "}42700.,{"  "}44750.,{"  "}46800.,{"\n"}{"         "}48850.,{"  "}50900.,{"  "}52950.,{"  "}55000.,{"  "}57050.,{"  "}59100.,{"  "}61150.,{"\n"}{"         "}63200.,{"  "}65250.,{"  "}67300.,{"  "}69350.,{"  "}71400.,{"  "}73450.,{"  "}75500.]),{"\n"} &lt;a list of 20 Patch objects&gt;)</pre>
                </div>
              </div>
              <div className="output_area">
                <div className="prompt"/>
                <div className="output_png output_subarea ">
                  <img
                    src="data:image/png;base64,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
"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[195]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="n">rankings</span><span className="p">[</span><span className="s1">'Name'</span><span className="p">]</span> <span className="o">=</span> <span className="n">rankings</span><span className="p">[</span><span className="s1">'Name'</span><span className="p">]</span><span className="o">.</span><span className="n">apply</span><span className="p">(</span><span className="k">lambda</span> <span className="n">x</span><span className="p">:</span> <span className="n">x</span><span className="o">.</span><span className="n">replace</span><span className="p">(</span><span className="s1">'--'</span><span className="p">,</span><span className="s1">' '</span><span className="p">))</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[198]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="n">salaries</span><span className="p">[</span><span className="s1">'School Name'</span><span className="p">]</span> <span className="o">=</span> <span className="n">salaries</span><span className="p">[</span><span className="s1">'School Name'</span><span className="p">]</span><span className="o">.</span><span className="n">str</span><span className="o">.</span><span className="n">split</span><span className="p">(</span><span className="s1">'('</span><span className="p">)</span><span className="o">.</span><span className="n">str</span><span className="p">[</span><span className="mi">0</span><span className="p">]</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[199]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="n">salaries</span><span className="p">[</span><span className="s1">'School Name'</span><span className="p">]</span> <span className="o">=</span> <span className="n">salaries</span><span className="p">[</span><span className="s1">'School Name'</span><span className="p">]</span><span className="o">.</span><span className="n">apply</span><span className="p">(</span><span className="k">lambda</span> <span className="n">x</span><span className="p">:</span> <span className="n">x</span><span className="o">.</span><span className="n">replace</span><span className="p">(</span><span className="s1">','</span><span className="p">,</span><span className="s1">''</span><span className="p">)</span><span className="o">.</span><span className="n">replace</span><span className="p">(</span><span className="s1">'-'</span><span className="p">,</span><span className="s1">''</span><span className="p">))</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[200]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="n">salaries</span><span className="p">[</span><span className="s1">'School Name'</span><span className="p">]</span> <span className="o">=</span> <span className="n">salaries</span><span className="p">[</span><span className="s1">'School Name'</span><span className="p">]</span><span className="o">.</span><span className="n">apply</span><span className="p">(</span><span className="k">lambda</span> <span className="n">x</span><span className="p">:</span> <span className="n">x</span><span className="o">.</span><span className="n">rstrip</span><span className="p">())</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[278]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="n">combined</span> <span className="o">=</span> <span className="n">pd</span><span className="o">.</span><span className="n">merge</span><span className="p">(</span><span className="n">rankings</span><span className="p">,</span> <span className="n">salaries</span><span className="p">,</span> <span className="n">left_on</span> <span className="o">=</span> <span className="s1">'Name'</span><span className="p">,</span> <span className="n">right_on</span> <span className="o">=</span> <span className="s1">'School Name'</span><span className="p">)</span><span className="o">.</span><span className="n">sort_values</span><span className="p">(</span><span className="s1">'Rank'</span><span className="p">)</span>{"\n"}<span className="n">combined</span><span className="o">.</span><span className="n">head</span><span className="p">()</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
          <div className="output_wrapper">
            <div className="output">
              <div className="output_area">
                <div className="prompt output_prompt">Out[278]:</div>
                <div className="output_html rendered_html output_subarea output_execute_result">
                  <div>
                    <style
                      scoped
                      dangerouslySetInnerHTML={{
                      __html: "\n .dataframe tbody tr th:only-of-type {\n vertical-align: middle;\n }\n\n .dataframe tbody tr th {\n vertical-align: top;\n }\n\n .dataframe thead th {\n text-align: right;\n }\n"
                    }}/>
                    <table border={1} className="dataframe">
                      <thead>
                        <tr
                          style={{
                          textAlign: 'right'
                        }}>
                          <th/>
                          <th>Name</th>
                          <th>Location</th>
                          <th>Rank</th>
                          <th>Description</th>
                          <th>Tuition and fees</th>
                          <th>In-state</th>
                          <th>Undergrad Enrollment</th>
                          <th>School Name</th>
                          <th>Region</th>
                          <th>Starting Median Salary</th>
                          <th>Mid-Career Median Salary</th>
                          <th>Mid-Career 10th Percentile Salary</th>
                          <th>Mid-Career 25th Percentile Salary</th>
                          <th>Mid-Career 75th Percentile Salary</th>
                          <th>Mid-Career 90th Percentile Salary</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>0</th>
                          <td>Princeton University</td>
                          <td>Princeton, NJ</td>
                          <td>1</td>
                          <td>Princeton, the fourth-oldest college in the Un...</td>
                          <td>45320</td>
                          <td>NaN</td>
                          <td>5,402</td>
                          <td>Princeton University</td>
                          <td>Northeastern</td>
                          <td>66500</td>
                          <td>131000</td>
                          <td>68900.0</td>
                          <td>100000</td>
                          <td>190000</td>
                          <td>261000.0</td>
                        </tr>
                        <tr>
                          <th>1</th>
                          <td>Harvard University</td>
                          <td>Cambridge, MA</td>
                          <td>2</td>
                          <td>Harvard is located in Cambridge, Massachusetts...</td>
                          <td>47074</td>
                          <td>NaN</td>
                          <td>6,699</td>
                          <td>Harvard University</td>
                          <td>Northeastern</td>
                          <td>63400</td>
                          <td>124000</td>
                          <td>54800.0</td>
                          <td>86200</td>
                          <td>179000</td>
                          <td>288000.0</td>
                        </tr>
                        <tr>
                          <th>2</th>
                          <td>Yale University</td>
                          <td>New Haven, CT</td>
                          <td>3</td>
                          <td>Yale University, located in New Haven, Connect...</td>
                          <td>49480</td>
                          <td>NaN</td>
                          <td>5,532</td>
                          <td>Yale University</td>
                          <td>Northeastern</td>
                          <td>59100</td>
                          <td>126000</td>
                          <td>58000.0</td>
                          <td>80600</td>
                          <td>198000</td>
                          <td>326000.0</td>
                        </tr>
                        <tr>
                          <th>3</th>
                          <td>Columbia University</td>
                          <td>New York, NY</td>
                          <td>5</td>
                          <td>Columbia University, located in Manhattan's Mo...</td>
                          <td>55056</td>
                          <td>NaN</td>
                          <td>6,102</td>
                          <td>Columbia University</td>
                          <td>Northeastern</td>
                          <td>59400</td>
                          <td>107000</td>
                          <td>50300.0</td>
                          <td>71900</td>
                          <td>161000</td>
                          <td>241000.0</td>
                        </tr>
                        <tr>
                          <th>4</th>
                          <td>Stanford University</td>
                          <td>Stanford, CA</td>
                          <td>5</td>
                          <td>Stanford University's pristine campus is locat...</td>
                          <td>47940</td>
                          <td>NaN</td>
                          <td>6,999</td>
                          <td>Stanford University</td>
                          <td>California</td>
                          <td>70400</td>
                          <td>129000</td>
                          <td>68400.0</td>
                          <td>93100</td>
                          <td>184000</td>
                          <td>257000.0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[216]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="k">del</span><span className="p">(</span><span className="n">combined</span><span className="p">[</span><span className="s1">'School Name'</span><span className="p">])</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[225]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="n">combined</span> <span className="o">=</span> <span className="n">combined</span><span className="o">.</span><span className="n">set_index</span><span className="p">(</span><span className="s1">'Name'</span><span className="p">)</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
          <div className="output_wrapper">
            <div className="output">
              <div className="output_area">
                <div className="prompt"/>
                <div className="output_subarea output_text output_error">
                  <pre><span className="ansi-red-intense-fg ansi-bold">---------------------------------------------------------------------------</span>{"\n"}<span className="ansi-red-intense-fg ansi-bold">KeyError</span>{"                                  "}Traceback (most recent call last){"\n"}<span className="ansi-green-intense-fg ansi-bold">~\Anaconda3\lib\site-packages\pandas\core\indexes\base.py</span> in <span className="ansi-cyan-fg">get_loc</span><span className="ansi-blue-intense-fg ansi-bold">(self, key, method, tolerance)</span>{"\n"}<span className="ansi-green-fg">{"   "}2521</span>{"             "}<span className="ansi-green-intense-fg ansi-bold">try</span><span className="ansi-yellow-intense-fg ansi-bold">:</span>{"\n"}<span className="ansi-green-intense-fg ansi-bold">-&gt; 2522</span><span className="ansi-yellow-intense-fg ansi-bold">{"                 "}</span><span className="ansi-green-intense-fg ansi-bold">return</span> self<span className="ansi-yellow-intense-fg ansi-bold">.</span>_engine<span className="ansi-yellow-intense-fg ansi-bold">.</span>get_loc<span className="ansi-yellow-intense-fg ansi-bold">(</span>key<span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}2523</span>{"             "}<span className="ansi-green-intense-fg ansi-bold">except</span> KeyError<span className="ansi-yellow-intense-fg ansi-bold">:</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">pandas\_libs\index.pyx</span> in <span className="ansi-cyan-fg">pandas._libs.index.IndexEngine.get_loc</span><span className="ansi-blue-intense-fg ansi-bold">()</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">pandas\_libs\index.pyx</span> in <span className="ansi-cyan-fg">pandas._libs.index.IndexEngine.get_loc</span><span className="ansi-blue-intense-fg ansi-bold">()</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">pandas\_libs\hashtable_class_helper.pxi</span> in <span className="ansi-cyan-fg">pandas._libs.hashtable.PyObjectHashTable.get_item</span><span className="ansi-blue-intense-fg ansi-bold">()</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">pandas\_libs\hashtable_class_helper.pxi</span> in <span className="ansi-cyan-fg">pandas._libs.hashtable.PyObjectHashTable.get_item</span><span className="ansi-blue-intense-fg ansi-bold">()</span>{"\n"}{"\n"}<span className="ansi-red-intense-fg ansi-bold">KeyError</span>: 'Name'{"\n"}{"\n"}During handling of the above exception, another exception occurred:{"\n"}{"\n"}<span className="ansi-red-intense-fg ansi-bold">KeyError</span>{"                                  "}Traceback (most recent call last){"\n"}<span className="ansi-green-intense-fg ansi-bold">&lt;ipython-input-225-6505fb645b52&gt;</span> in <span className="ansi-cyan-fg">&lt;module&gt;</span><span className="ansi-blue-intense-fg ansi-bold">()</span>{"\n"}<span className="ansi-green-intense-fg ansi-bold">----&gt; 1</span><span className="ansi-yellow-intense-fg ansi-bold"> </span>combined <span className="ansi-yellow-intense-fg ansi-bold">=</span> combined<span className="ansi-yellow-intense-fg ansi-bold">.</span>set_index<span className="ansi-yellow-intense-fg ansi-bold">(</span><span className="ansi-blue-intense-fg ansi-bold">'Name'</span><span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">~\Anaconda3\lib\site-packages\pandas\core\frame.py</span> in <span className="ansi-cyan-fg">set_index</span><span className="ansi-blue-intense-fg ansi-bold">(self, keys, drop, append, inplace, verify_integrity)</span>{"\n"}<span className="ansi-green-fg">{"   "}3144</span>{"                 "}names<span className="ansi-yellow-intense-fg ansi-bold">.</span>append<span className="ansi-yellow-intense-fg ansi-bold">(</span><span className="ansi-green-intense-fg ansi-bold">None</span><span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}3145</span>{"             "}<span className="ansi-green-intense-fg ansi-bold">else</span><span className="ansi-yellow-intense-fg ansi-bold">:</span>{"\n"}<span className="ansi-green-intense-fg ansi-bold">-&gt; 3146</span><span className="ansi-yellow-intense-fg ansi-bold">{"                 "}</span>level <span className="ansi-yellow-intense-fg ansi-bold">=</span> frame<span className="ansi-yellow-intense-fg ansi-bold">[</span>col<span className="ansi-yellow-intense-fg ansi-bold">]</span><span className="ansi-yellow-intense-fg ansi-bold">.</span>_values{"\n"}<span className="ansi-green-fg">{"   "}3147</span>{"                 "}names<span className="ansi-yellow-intense-fg ansi-bold">.</span>append<span className="ansi-yellow-intense-fg ansi-bold">(</span>col<span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}3148</span>{"                 "}<span className="ansi-green-intense-fg ansi-bold">if</span> drop<span className="ansi-yellow-intense-fg ansi-bold">:</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">~\Anaconda3\lib\site-packages\pandas\core\frame.py</span> in <span className="ansi-cyan-fg">__getitem__</span><span className="ansi-blue-intense-fg ansi-bold">(self, key)</span>{"\n"}<span className="ansi-green-fg">{"   "}2137</span>{"             "}<span className="ansi-green-intense-fg ansi-bold">return</span> self<span className="ansi-yellow-intense-fg ansi-bold">.</span>_getitem_multilevel<span className="ansi-yellow-intense-fg ansi-bold">(</span>key<span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}2138</span>{"         "}<span className="ansi-green-intense-fg ansi-bold">else</span><span className="ansi-yellow-intense-fg ansi-bold">:</span>{"\n"}<span className="ansi-green-intense-fg ansi-bold">-&gt; 2139</span><span className="ansi-yellow-intense-fg ansi-bold">{"             "}</span><span className="ansi-green-intense-fg ansi-bold">return</span> self<span className="ansi-yellow-intense-fg ansi-bold">.</span>_getitem_column<span className="ansi-yellow-intense-fg ansi-bold">(</span>key<span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}2140</span> {"\n"}<span className="ansi-green-fg">{"   "}2141</span>{"     "}<span className="ansi-green-intense-fg ansi-bold">def</span> _getitem_column<span className="ansi-yellow-intense-fg ansi-bold">(</span>self<span className="ansi-yellow-intense-fg ansi-bold">,</span> key<span className="ansi-yellow-intense-fg ansi-bold">)</span><span className="ansi-yellow-intense-fg ansi-bold">:</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">~\Anaconda3\lib\site-packages\pandas\core\frame.py</span> in <span className="ansi-cyan-fg">_getitem_column</span><span className="ansi-blue-intense-fg ansi-bold">(self, key)</span>{"\n"}<span className="ansi-green-fg">{"   "}2144</span>{"         "}<span className="ansi-red-intense-fg ansi-bold"># get column</span>{"\n"}<span className="ansi-green-fg">{"   "}2145</span>{"         "}<span className="ansi-green-intense-fg ansi-bold">if</span> self<span className="ansi-yellow-intense-fg ansi-bold">.</span>columns<span className="ansi-yellow-intense-fg ansi-bold">.</span>is_unique<span className="ansi-yellow-intense-fg ansi-bold">:</span>{"\n"}<span className="ansi-green-intense-fg ansi-bold">-&gt; 2146</span><span className="ansi-yellow-intense-fg ansi-bold">{"             "}</span><span className="ansi-green-intense-fg ansi-bold">return</span> self<span className="ansi-yellow-intense-fg ansi-bold">.</span>_get_item_cache<span className="ansi-yellow-intense-fg ansi-bold">(</span>key<span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}2147</span> {"\n"}<span className="ansi-green-fg">{"   "}2148</span>{"         "}<span className="ansi-red-intense-fg ansi-bold"># duplicate columns &amp; possible reduce dimensionality</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">~\Anaconda3\lib\site-packages\pandas\core\generic.py</span> in <span className="ansi-cyan-fg">_get_item_cache</span><span className="ansi-blue-intense-fg ansi-bold">(self, item)</span>{"\n"}<span className="ansi-green-fg">{"   "}1840</span>{"         "}res <span className="ansi-yellow-intense-fg ansi-bold">=</span> cache<span className="ansi-yellow-intense-fg ansi-bold">.</span>get<span className="ansi-yellow-intense-fg ansi-bold">(</span>item<span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}1841</span>{"         "}<span className="ansi-green-intense-fg ansi-bold">if</span> res <span className="ansi-green-intense-fg ansi-bold">is</span> <span className="ansi-green-intense-fg ansi-bold">None</span><span className="ansi-yellow-intense-fg ansi-bold">:</span>{"\n"}<span className="ansi-green-intense-fg ansi-bold">-&gt; 1842</span><span className="ansi-yellow-intense-fg ansi-bold">{"             "}</span>values <span className="ansi-yellow-intense-fg ansi-bold">=</span> self<span className="ansi-yellow-intense-fg ansi-bold">.</span>_data<span className="ansi-yellow-intense-fg ansi-bold">.</span>get<span className="ansi-yellow-intense-fg ansi-bold">(</span>item<span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}1843</span>{"             "}res <span className="ansi-yellow-intense-fg ansi-bold">=</span> self<span className="ansi-yellow-intense-fg ansi-bold">.</span>_box_item_values<span className="ansi-yellow-intense-fg ansi-bold">(</span>item<span className="ansi-yellow-intense-fg ansi-bold">,</span> values<span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}1844</span>{"             "}cache<span className="ansi-yellow-intense-fg ansi-bold">[</span>item<span className="ansi-yellow-intense-fg ansi-bold">]</span> <span className="ansi-yellow-intense-fg ansi-bold">=</span> res{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">~\Anaconda3\lib\site-packages\pandas\core\internals.py</span> in <span className="ansi-cyan-fg">get</span><span className="ansi-blue-intense-fg ansi-bold">(self, item, fastpath)</span>{"\n"}<span className="ansi-green-fg">{"   "}3836</span> {"\n"}<span className="ansi-green-fg">{"   "}3837</span>{"             "}<span className="ansi-green-intense-fg ansi-bold">if</span> <span className="ansi-green-intense-fg ansi-bold">not</span> isna<span className="ansi-yellow-intense-fg ansi-bold">(</span>item<span className="ansi-yellow-intense-fg ansi-bold">)</span><span className="ansi-yellow-intense-fg ansi-bold">:</span>{"\n"}<span className="ansi-green-intense-fg ansi-bold">-&gt; 3838</span><span className="ansi-yellow-intense-fg ansi-bold">{"                 "}</span>loc <span className="ansi-yellow-intense-fg ansi-bold">=</span> self<span className="ansi-yellow-intense-fg ansi-bold">.</span>items<span className="ansi-yellow-intense-fg ansi-bold">.</span>get_loc<span className="ansi-yellow-intense-fg ansi-bold">(</span>item<span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}3839</span>{"             "}<span className="ansi-green-intense-fg ansi-bold">else</span><span className="ansi-yellow-intense-fg ansi-bold">:</span>{"\n"}<span className="ansi-green-fg">{"   "}3840</span>{"                 "}indexer <span className="ansi-yellow-intense-fg ansi-bold">=</span> np<span className="ansi-yellow-intense-fg ansi-bold">.</span>arange<span className="ansi-yellow-intense-fg ansi-bold">(</span>len<span className="ansi-yellow-intense-fg ansi-bold">(</span>self<span className="ansi-yellow-intense-fg ansi-bold">.</span>items<span className="ansi-yellow-intense-fg ansi-bold">)</span><span className="ansi-yellow-intense-fg ansi-bold">)</span><span className="ansi-yellow-intense-fg ansi-bold">[</span>isna<span className="ansi-yellow-intense-fg ansi-bold">(</span>self<span className="ansi-yellow-intense-fg ansi-bold">.</span>items<span className="ansi-yellow-intense-fg ansi-bold">)</span><span className="ansi-yellow-intense-fg ansi-bold">]</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">~\Anaconda3\lib\site-packages\pandas\core\indexes\base.py</span> in <span className="ansi-cyan-fg">get_loc</span><span className="ansi-blue-intense-fg ansi-bold">(self, key, method, tolerance)</span>{"\n"}<span className="ansi-green-fg">{"   "}2522</span>{"                 "}<span className="ansi-green-intense-fg ansi-bold">return</span> self<span className="ansi-yellow-intense-fg ansi-bold">.</span>_engine<span className="ansi-yellow-intense-fg ansi-bold">.</span>get_loc<span className="ansi-yellow-intense-fg ansi-bold">(</span>key<span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}2523</span>{"             "}<span className="ansi-green-intense-fg ansi-bold">except</span> KeyError<span className="ansi-yellow-intense-fg ansi-bold">:</span>{"\n"}<span className="ansi-green-intense-fg ansi-bold">-&gt; 2524</span><span className="ansi-yellow-intense-fg ansi-bold">{"                 "}</span><span className="ansi-green-intense-fg ansi-bold">return</span> self<span className="ansi-yellow-intense-fg ansi-bold">.</span>_engine<span className="ansi-yellow-intense-fg ansi-bold">.</span>get_loc<span className="ansi-yellow-intense-fg ansi-bold">(</span>self<span className="ansi-yellow-intense-fg ansi-bold">.</span>_maybe_cast_indexer<span className="ansi-yellow-intense-fg ansi-bold">(</span>key<span className="ansi-yellow-intense-fg ansi-bold">)</span><span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}<span className="ansi-green-fg">{"   "}2525</span> {"\n"}<span className="ansi-green-fg">{"   "}2526</span>{"         "}indexer <span className="ansi-yellow-intense-fg ansi-bold">=</span> self<span className="ansi-yellow-intense-fg ansi-bold">.</span>get_indexer<span className="ansi-yellow-intense-fg ansi-bold">(</span><span className="ansi-yellow-intense-fg ansi-bold">[</span>key<span className="ansi-yellow-intense-fg ansi-bold">]</span><span className="ansi-yellow-intense-fg ansi-bold">,</span> method<span className="ansi-yellow-intense-fg ansi-bold">=</span>method<span className="ansi-yellow-intense-fg ansi-bold">,</span> tolerance<span className="ansi-yellow-intense-fg ansi-bold">=</span>tolerance<span className="ansi-yellow-intense-fg ansi-bold">)</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">pandas\_libs\index.pyx</span> in <span className="ansi-cyan-fg">pandas._libs.index.IndexEngine.get_loc</span><span className="ansi-blue-intense-fg ansi-bold">()</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">pandas\_libs\index.pyx</span> in <span className="ansi-cyan-fg">pandas._libs.index.IndexEngine.get_loc</span><span className="ansi-blue-intense-fg ansi-bold">()</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">pandas\_libs\hashtable_class_helper.pxi</span> in <span className="ansi-cyan-fg">pandas._libs.hashtable.PyObjectHashTable.get_item</span><span className="ansi-blue-intense-fg ansi-bold">()</span>{"\n"}{"\n"}<span className="ansi-green-intense-fg ansi-bold">pandas\_libs\hashtable_class_helper.pxi</span> in <span className="ansi-cyan-fg">pandas._libs.hashtable.PyObjectHashTable.get_item</span><span className="ansi-blue-intense-fg ansi-bold">()</span>{"\n"}{"\n"}<span className="ansi-red-intense-fg ansi-bold">KeyError</span>: 'Name'</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[227]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="n">ivy</span> <span className="o">=</span> <span className="p">[</span><span className="s1">'Brown University'</span><span className="p">,</span><span className="s1">'Columbia University'</span><span className="p">,</span><span className="s1">'Cornell University'</span><span className="p">,</span><span className="s1">'Dartmouth College'</span><span className="p">,</span><span className="s1">'Harvard University'</span><span className="p">,</span><span className="s1">'University of Pennsylvania'</span><span className="p">,</span><span className="s1">'Priceton University'</span><span className="p">,</span><span className="s1">'Yale University'</span><span className="p">]</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[241]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="n">ivy_schools</span> <span className="o">=</span> <span className="n">combined</span><span className="o">.</span><span className="n">reindex</span><span className="p">(</span><span className="n">ivy</span><span className="p">)</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[247]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="n">stanford</span> <span className="o">=</span> <span className="n">combined</span><span className="o">.</span><span className="n">loc</span><span className="p">[</span><span className="s1">'Stanford University'</span><span className="p">]</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[269]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="n">bc</span> <span className="o">=</span> <span className="n">combined</span><span className="o">.</span><span className="n">loc</span><span className="p">[</span><span className="s1">'Boston College'</span><span className="p">]</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[275]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">combined</span><span className="p">[</span><span className="s1">'Rank'</span><span className="p">],</span><span className="n">combined</span><span className="p">[</span><span className="s1">'Starting Median Salary'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">ivy_schools</span><span className="p">[</span><span className="s1">'Rank'</span><span className="p">],</span><span className="n">ivy_schools</span><span className="p">[</span><span className="s1">'Starting Median Salary'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">stanford</span><span className="p">[</span><span className="s1">'Rank'</span><span className="p">],</span><span className="n">stanford</span><span className="p">[</span><span className="s1">'Starting Median Salary'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">bc</span><span className="p">[</span><span className="s1">'Rank'</span><span className="p">],</span><span className="n">bc</span><span className="p">[</span><span className="s1">'Starting Median Salary'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">show</span><span className="p">()</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
          <div className="output_wrapper">
            <div className="output">
              <div className="output_area">
                <div className="prompt"/>
                <div className="output_png output_subarea ">
                  <img
                    src="data:image/png;base64,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
YII=
"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[273]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">combined</span><span className="p">[</span><span className="s1">'Rank'</span><span className="p">],</span><span className="n">combined</span><span className="p">[</span><span className="s1">'Mid-Career 25th Percentile Salary'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">ivy_schools</span><span className="p">[</span><span className="s1">'Rank'</span><span className="p">],</span><span className="n">ivy_schools</span><span className="p">[</span><span className="s1">'Mid-Career 25th Percentile Salary'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">stanford</span><span className="p">[</span><span className="s1">'Rank'</span><span className="p">],</span><span className="n">stanford</span><span className="p">[</span><span className="s1">'Mid-Career 25th Percentile Salary'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">bc</span><span className="p">[</span><span className="s1">'Rank'</span><span className="p">],</span><span className="n">bc</span><span className="p">[</span><span className="s1">'Mid-Career 25th Percentile Salary'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">show</span><span className="p">()</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
          <div className="output_wrapper">
            <div className="output">
              <div className="output_area">
                <div className="prompt"/>
                <div className="output_png output_subarea ">
                  <img
                    src="data:image/png;base64,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
AAAAAElFTkSuQmCC
"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell border-box-sizing code_cell rendered">
          <div className="input">
            <div className="prompt input_prompt">In&nbsp;[252]:</div>
            <div className="inner_cell">
              <div className="input_area">
                <div className=" highlight hl-ipython3">
                  <pre><span /><span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">bc</span><span className="p">[</span><span className="s1">'Tuition and fees'</span><span className="p">],</span><span className="n">bc</span><span className="p">[</span><span className="s1">'Starting Median Salary'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">ivy_schools</span><span className="p">[</span><span className="s1">'Tuition and fees'</span><span className="p">],</span><span className="n">ivy_schools</span><span className="p">[</span><span className="s1">'Starting Median Salary'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">scatter</span><span className="p">(</span><span className="n">stanford</span><span className="p">[</span><span className="s1">'Tuition and fees'</span><span className="p">],</span><span className="n">stanford</span><span className="p">[</span><span className="s1">'Starting Median Salary'</span><span className="p">])</span>{"\n"}<span className="n">plt</span><span className="o">.</span><span className="n">show</span><span className="p">()</span>{"\n"}</pre>
                </div>
              </div>
            </div>
          </div>
          <div className="output_wrapper">
            <div className="output">
              <div className="output_area">
                <div className="prompt"/>
                <div className="output_png output_subarea ">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYcAAAD8CAYAAACcjGjIAAAABHNCSVQICAgIfAhkiAAAAAlwSFlz
AAALEgAACxIB0t1+/AAAADl0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uIDIuMS4wLCBo
dHRwOi8vbWF0cGxvdGxpYi5vcmcvpW3flQAAIABJREFUeJzt3XuU3HV9//HnO5sNLlbYRBYJm0Ri
TfHH5UcuK+BJDwfjwYRLk3ihhvan+VmO4WfBWttfJGk5JSit0fw8KK1FIlLBWkO4ha2i25RIT0sF
sssGQsCUlVt2E8hSCLUlJbf374/5TJjd+c7Md2a+c389zpmzs5/5zMzn+93k+/5+7ubuiIiIZJpQ
6wKIiEj9UXAQEZEsCg4iIpJFwUFERLIoOIiISBYFBxERyaLgICIiWRQcREQki4KDiIhkmVjrApTq
hBNO8FNOOaXWxRARaSgDAwOvuHtXoXwNGxxOOeUU+vv7a10MEZGGYmYvxMmnZiUREcmi4CAiIlkU
HEREJIuCg4iIZFFwEBGRLA07WklEJMqmwRHW9e1k9779nNzZwcqFp7J0Tneti9VwFBxEpGlsGhxh
9T3b2X/wMAAj+/az+p7tAAoQRSrYrGRmp5rZtozHf5jZH5rZGjMbyUi/KOM9q81syMx2mtnCjPRF
IW3IzFZlpM80s0fM7Bkzu8PMJiV/qCLS7Nb17TwaGNL2HzzMur6dNSpR4yoYHNx9p7vPdvfZwDzg
DeDe8PIN6dfc/X4AMzsNWAacDiwC/trM2sysDfgWcCFwGnBZyAvw1fBZs4DXgMuTO0QRaRW79+0v
Kl1yK7ZD+kPAL9093wy7JcAGd3/T3Z8DhoCzw2PI3Z919wPABmCJmRmwALgrvP82YGmR5RIR4eTO
jqLSJbdig8My4IcZv19lZk+Y2a1mNjmkdQO7MvIMh7Rc6e8E9rn7oXHpIiJFWbnwVDra28akdbS3
sXLhqTUqUeOKHRxCP8Bi4M6QdBPw68BsYA/w9XTWiLd7CelRZVhhZv1m1j86Ohq36CLSIpbO6eYr
Hz2T7s4ODOju7OArHz1TndElKGa00oXAY+7+MkD6J4CZfQf4Ufh1GJie8b5pwO7wPCr9FaDTzCaG
2kNm/jHcfT2wHqCnpycygIhIa1s6p1vBIAHFNCtdRkaTkplNzXjtI8CT4XkvsMzMjjGzmcAs4FFg
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
"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Jupyter;